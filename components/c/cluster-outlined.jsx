import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3dfvwb-v.css';
import '../../css/j/jv9nyta4d.css';
import '../../css/l/lrno47b8v.css';
import '../../css/k/k-gcz4-we.css';
import '../../css/b/b0iml815k.css';
import '../../css/c/cvw_2kbed.css';
import '../../css/b/bcf0lotxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v3dfvwb-v"/><path class="jv9nyta4d"/><circle class="lrno47b8v"/><circle class="k-gcz4-we"/><path class="b0iml815k"/><circle class="cvw_2kbed"/><circle class="bcf0lotxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:cluster-outlined"} {...others} />);
}

export default Component;
