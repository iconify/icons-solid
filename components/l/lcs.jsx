import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iib_u5vix.css';
import '../../css/e/espirmbhi.css';
import '../../css/o/ogrg-o-wi.css';
import '../../css/s/s_5ru8bnc.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGWCs6ObpT" class="iib_u5vix"/></defs><use href="#SVGWCs6ObpT"/><use href="#SVGWCs6ObpT"/><path clip-rule="evenodd" class="espirmbhi"/><path class="ogrg-o-wi"/><path clip-rule="evenodd" class="s_5ru8bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lcs"} {...others} />);
}

export default Component;
