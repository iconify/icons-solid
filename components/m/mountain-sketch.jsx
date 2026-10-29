import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f0-uvxvpa.css';
import '../../css/c/cb211lb7c.css';
import '../../css/n/n3b-5s0yy.css';
import '../../css/b/b0b1n7bzo.css';
import '../../css/q/qwh48ubyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f0-uvxvpa"/><path class="cb211lb7c wm-k"/><path class="n3b-5s0yy wm-a"/><path class="b0b1n7bzo wm-k"/><path class="qwh48ubyu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mountain-sketch"} {...others} />);
}

export default Component;
