import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kjxaz4bin.css';
import '../../css/h/hopgsq03j.css';
import '../../css/n/n8a_7w0gh.css';
import '../../css/u/us7zzpb1d.css';
import '../../css/z/z8u1fkbuw.css';
import '../../css/l/l6dry07lg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kjxaz4bin"/><path clip-rule="evenodd" class="hopgsq03j"/><path class="n8a_7w0gh"/><path class="us7zzpb1d"/><path class="z8u1fkbuw"/><path clip-rule="evenodd" class="l6dry07lg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:lobster"} {...others} />);
}

export default Component;
