import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azuxgwbno.css';
import '../../css/e/e1lg7xg6t.css';
import '../../css/n/ntsssjbcn.css';
import '../../css/k/km77a_-dm.css';
import '../../css/o/og7cw5buu.css';
import '../../css/e/et88uxbzz.css';
import '../../css/g/gpi8pml2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="azuxgwbno wm-shadow"/><path class="e1lg7xg6t wm-k"/><path class="ntsssjbcn wm-k"/><path class="km77a_-dm wm-k"/><path class="og7cw5buu wm-k"/><path class="et88uxbzz wm-k"/><path class="gpi8pml2g wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:swap"} {...others} />);
}

export default Component;
