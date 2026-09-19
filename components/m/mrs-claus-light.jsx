import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uve1vobko.css';
import '../../css/c/ceavlisam.css';
import '../../css/a/adj1_tb0h.css';
import '../../css/u/unf4qh6fq.css';
import '../../css/n/n0_dkbbnq.css';
import '../../css/m/mxevwvsmb.css';
import '../../css/t/tj-al1neu.css';
import '../../css/i/ibe7kxpfo.css';
import '../../css/o/o5a1yfbnr.css';
import '../../css/d/dyj6dwb1d.css';
import '../../css/i/ihv4pvbdx.css';
import '../../css/y/yaf4f1bsy.css';
import '../../css/z/z0b9v2dpy.css';
import '../../css/v/vh64n9bxi.css';
import '../../css/e/eqyi76mqb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="uve1vobko"/><path class="ceavlisam"/><path class="adj1_tb0h"/><path class="unf4qh6fq"/><path class="n0_dkbbnq"/><path class="mxevwvsmb"/><path class="tj-al1neu"/><path class="ibe7kxpfo"/><path class="o5a1yfbnr"/><path class="dyj6dwb1d"/><path class="ihv4pvbdx"/><path class="yaf4f1bsy"/><path class="z0b9v2dpy"/><path class="vh64n9bxi"/><path class="eqyi76mqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mrs-claus-light"} {...others} />);
}

export default Component;
