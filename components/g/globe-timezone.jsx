import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oax_uo-bh.css';
import '../../css/q/q-6bjtb-l.css';
import '../../css/g/g8itcgf_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oax_uo-bh"/><path class="q-6bjtb-l"/><path class="g8itcgf_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:globe-timezone"} {...others} />);
}

export default Component;
