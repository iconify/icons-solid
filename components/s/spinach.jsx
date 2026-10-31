import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zeu8ueilu.css';
import '../../css/b/bbopbtb8a.css';
import '../../css/w/w3r7knbro.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g display="block"><path class="zeu8ueilu"/><path class="bbopbtb8a"/><path class="w3r7knbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:spinach"} {...others} />);
}

export default Component;
