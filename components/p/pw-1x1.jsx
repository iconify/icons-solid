import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w73fa6bxh.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/l/l4vwo7dma.css';
import '../../css/c/cmg7957jf.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGYyPHoMWp"><path class="w73fa6bxh"/></clipPath></defs><g clip-path="url(#SVGYyPHoMWp)" transform="translate(-185 -12.5)scale(2.9973)" class="nv9qcacyl"><path class="l4vwo7dma"/><path class="cmg7957jf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pw-1x1"} {...others} />);
}

export default Component;
