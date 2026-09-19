import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx_p0ab0a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zx_p0ab0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:hitachi"} {...others} />);
}

export default Component;
