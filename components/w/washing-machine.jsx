import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/usvii4y4a.css';
import '../../css/r/r72fqz6sy.css';
import '../../css/q/q88cf_b0l.css';
import '../../css/d/dtoq0cbyo.css';
import '../../css/v/v0n_ghb9i.css';
import '../../css/v/v7pd--bqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="usvii4y4a wm-k"/><path class="r72fqz6sy wm-k"/><path class="q88cf_b0l wm-k"/><path class="dtoq0cbyo wm-shadow"/><path class="v0n_ghb9i wm-shine"/><path class="v7pd--bqm wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:washing-machine"} {...others} />);
}

export default Component;
