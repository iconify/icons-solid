import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i309x2b5e.css';
import '../../css/z/zrfwi90qw.css';
import '../../css/g/gc9ew1bqh.css';
import '../../css/l/l2fpngjgy.css';
import '../../css/c/cavwa0tqu.css';
import '../../css/m/mt7qlljze.css';
import '../../css/q/qfdisboia.css';
import '../../css/d/dmznt0bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="i309x2b5e"/><path class="zrfwi90qw"/><path class="gc9ew1bqh wm-shine"/><path class="l2fpngjgy wm-k"/><path class="cavwa0tqu wm-a"/><path class="mt7qlljze"/><path class="qfdisboia"/><path class="dmznt0bsi wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:folder-check"} {...others} />);
}

export default Component;
