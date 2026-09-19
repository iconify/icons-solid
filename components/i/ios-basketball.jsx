import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhovjybii.css';
import '../../css/w/wgippybqj.css';
import '../../css/v/vvs3trb8w.css';
import '../../css/h/hucfu1odj.css';
import '../../css/v/v9_z99bli.css';
import '../../css/u/u45al1b1f.css';
import '../../css/q/qdfw_nb6j.css';
import '../../css/u/ugukhdcjd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dhovjybii"/><path class="wgippybqj"/><path class="vvs3trb8w"/><path class="hucfu1odj"/><path class="v9_z99bli"/><path class="u45al1b1f"/><path class="qdfw_nb6j"/><path class="ugukhdcjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-basketball"} {...others} />);
}

export default Component;
