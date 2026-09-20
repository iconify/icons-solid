import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/op6a2bbfz.css';
import '../../css/s/s6z8b405g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="op6a2bbfz"/><path class="s6z8b405g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:folder-open"} {...others} />);
}

export default Component;
