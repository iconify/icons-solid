import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3jmkedbk.css';
import '../../css/e/epdjs8byf.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG3Qrzedlb" class="w3jmkedbk"/></defs><path class="epdjs8byf"/><use href="#SVG3Qrzedlb"/><use href="#SVG3Qrzedlb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:application-outlined"} {...others} />);
}

export default Component;
