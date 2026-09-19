import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu6xx9mid.css';

const viewBox = {"width":28,"height":24};
const content = `<path class="wu6xx9mid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:comment"} {...others} />);
}

export default Component;
