import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tphg7kbjn.css';
import '../../css/h/hjk0yxbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="tphg7kbjn"/><path class="hjk0yxbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:d3js-logo"} {...others} />);
}

export default Component;
