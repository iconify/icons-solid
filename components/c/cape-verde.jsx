import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c85pd_b_f.css';
import '../../css/m/mu9as98bc.css';
import '../../css/m/mpcblwabv.css';
import '../../css/u/u5qijbbuz.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="c85pd_b_f"/><path class="mu9as98bc"/><path class="mpcblwabv"/><path class="u5qijbbuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:cape-verde"} {...others} />);
}

export default Component;
