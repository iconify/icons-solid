import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-qu68urf.css';
import '../../css/j/jwfh-eymm.css';
import '../../css/l/lrf10udgr.css';
import '../../css/u/uedb0lnmk.css';
import '../../css/h/hgikn5bbe.css';
import '../../css/d/d3iunpb9a.css';
import '../../css/t/tvi-phmpy.css';
import '../../css/h/hllum86sp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w-qu68urf wm-shadow"/><path class="jwfh-eymm wm-k"/><path class="lrf10udgr wm-k"/><path class="uedb0lnmk wm-k"/><path class="hgikn5bbe wm-k"/><path class="d3iunpb9a wm-k"/><path class="tvi-phmpy wm-shine"/><path class="hllum86sp wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:parking"} {...others} />);
}

export default Component;
