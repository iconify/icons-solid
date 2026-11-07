import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aonk6ia5q.css';
import '../../css/b/bb_ez-z-f.css';
import '../../css/g/gv-68uz1p.css';
import '../../css/u/unb31ubmx.css';
import '../../css/u/ul5ak2zpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aonk6ia5q"/><path class="bb_ez-z-f"/><path class="gv-68uz1p"/><path class="unb31ubmx"/><path clip-rule="evenodd" class="ul5ak2zpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:station-bold"} {...others} />);
}

export default Component;
