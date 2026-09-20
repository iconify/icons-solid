import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyd1jjbgm.css';

const viewBox = {"width":1548,"height":1087};
const content = `<path class="dyd1jjbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:japan-post-bank"} {...others} />);
}

export default Component;
