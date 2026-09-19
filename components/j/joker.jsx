import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aebs81nbm.css';
import '../../css/r/r7-o9zbma.css';
import '../../css/x/xt0zhz0yf.css';
import '../../css/a/a02a9jbmr.css';
import '../../css/o/oybl7bcif.css';
import '../../css/w/wm2uq-jsu.css';
import '../../css/s/sxeicbc4d.css';
import '../../css/x/xoc4f8_dk.css';
import '../../css/w/w1ecumbae.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="aebs81nbm"/><path class="r7-o9zbma"/><path class="xt0zhz0yf"/><path class="a02a9jbmr"/><path clip-rule="evenodd" class="oybl7bcif"/><path clip-rule="evenodd" class="wm2uq-jsu"/><path clip-rule="evenodd" class="sxeicbc4d"/><path class="xoc4f8_dk"/><path class="w1ecumbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:joker"} {...others} />);
}

export default Component;
