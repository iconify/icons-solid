import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_z8u2bhx.css';

const viewBox = {"width":2048,"height":1344};
const content = `<path class="c_z8u2bhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:fish"} {...others} />);
}

export default Component;
