import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_hs9s_lv.css';
import '../../css/n/nikou0bxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d_hs9s_lv"/><path class="nikou0bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:phone-missed-call-fill"} {...others} />);
}

export default Component;
