import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq-yft7qu.css';

const viewBox = {"width":2225,"height":399};
const content = `<path clip-rule="evenodd" class="zq-yft7qu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:electronic-arts"} {...others} />);
}

export default Component;
