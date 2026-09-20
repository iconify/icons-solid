import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv5b60b3j.css';
import '../../css/z/z8r7eipgi.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="lv5b60b3j"/><path class="z8r7eipgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:typescript"} {...others} />);
}

export default Component;
