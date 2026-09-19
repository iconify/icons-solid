import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5_zu7bdk.css';
import '../../css/e/elcyybcku.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGdPdPCXCl" class="f5_zu7bdk"/><path id="SVGXdxzPddm" class="elcyybcku"/></defs><use href="#SVGdPdPCXCl"/><use href="#SVGXdxzPddm"/><use href="#SVGdPdPCXCl"/><use href="#SVGXdxzPddm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:cloud-download-fill"} {...others} />);
}

export default Component;
