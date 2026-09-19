import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n0o3qfmwr.css';
import '../../css/c/csy2iwbih.css';
import '../../css/w/wgcjc_bsh.css';
import '../../css/u/u2i7grb9o.css';
import '../../css/f/fu--6fbzi.css';
import '../../css/h/hp4ijmb-e.css';
import '../../css/a/aqzg0kb9d.css';
import '../../css/s/sck3i9bjr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="n0o3qfmwr"/><path class="csy2iwbih"/><path class="wgcjc_bsh"/><path class="u2i7grb9o"/><path class="fu--6fbzi"/><path class="hp4ijmb-e"/><path class="aqzg0kb9d"/><path class="sck3i9bjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:tractor"} {...others} />);
}

export default Component;
