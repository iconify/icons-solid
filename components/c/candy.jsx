import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbe467nxb.css';
import '../../css/a/a9xxhyt1p.css';
import '../../css/o/on6cd5bco.css';
import '../../css/j/jlgyac5de.css';
import '../../css/m/muxt2_2nu.css';
import '../../css/c/c4zfxmb9t.css';
import '../../css/x/x-_8cf4qb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kbe467nxb wm-shadow"/><path class="a9xxhyt1p wm-k"/><path class="on6cd5bco wm-k"/><path class="jlgyac5de wm-k"/><path class="muxt2_2nu wm-k"/><path class="c4zfxmb9t wm-k"/><path class="wm-shine x-_8cf4qb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:candy"} {...others} />);
}

export default Component;
