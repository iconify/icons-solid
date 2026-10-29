import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bh88hfbbl.css';
import '../../css/l/l4vlz4b-i.css';
import '../../css/j/jnbx89z3f.css';
import '../../css/p/pnwuy2ujo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bh88hfbbl"/><path class="l4vlz4b-i wm-a"/><path class="jnbx89z3f"/><path class="pnwuy2ujo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-input-duo"} {...others} />);
}

export default Component;
