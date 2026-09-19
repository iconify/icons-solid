import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/d/d7xt2nbzs.css';
import '../../css/j/jcrz3rb1c.css';
import '../../css/a/a0ymu897w.css';
import '../../css/s/s7e8ajkna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="d7xt2nbzs"/><path class="jcrz3rb1c"/><path class="a0ymu897w"/><path class="s7e8ajkna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:chat-edit"} {...others} />);
}

export default Component;
