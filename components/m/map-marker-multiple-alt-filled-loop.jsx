import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_1xrq.css';
import '../../css/q/q7qpvx.css';
import '../../css/x/xizzfp.css';
import '../../css/a/ainywl.css';
import '../../css/n/nf43cj.css';
import '../../css/x/x36t0d.css';
import '../../css/o/o3umjd.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-e0pf-z.css';
import '../../css/t/tr-7ecuqx.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-h46djy.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGEFuhhdeR"><path class="g_1xrq q7qpvx xizzfp"/><path class="ainywl g_1xrq nf43cj x36t0d"/><path class="g_1xrq q7qpvx x36t0d"/><circle class="nf43cj o3umjd"/></mask></defs><path mask="url(#SVGEFuhhdeR)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:map-marker-multiple-alt-filled-loop"} {...others} />);
}

export default Component;
