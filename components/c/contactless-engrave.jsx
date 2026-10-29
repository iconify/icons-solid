import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/io40x634q.css';
import '../../css/a/a4usxjbwv.css';
import '../../css/g/g6ebdibnz.css';
import '../../css/k/k2k6wrbli.css';
import '../../css/u/uk4liwe1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="io40x634q wm-k"/><path class="a4usxjbwv wm-a"/><path class="g6ebdibnz wm-shadow"/><path class="k2k6wrbli wm-k"/><path class="uk4liwe1r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:contactless-engrave"} {...others} />);
}

export default Component;
