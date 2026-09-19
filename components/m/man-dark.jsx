import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0j6xezsr.css';
import '../../css/p/ppbx5znva.css';
import '../../css/f/fpo7c3bbj.css';
import '../../css/m/m62w0qbrw.css';
import '../../css/s/s7evhxbta.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/c/cnwgomljg.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/x/xcjq4ibxl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="j0j6xezsr"/><path class="ppbx5znva"/><path class="fpo7c3bbj"/><path class="m62w0qbrw"/><path class="s7evhxbta"/><path class="ps7z7wb7n"/><path class="cnwgomljg"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="xcjq4ibxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-dark"} {...others} />);
}

export default Component;
