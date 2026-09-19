import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ziw_0absk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ziw_0absk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:5-circle"} {...others} />);
}

export default Component;
