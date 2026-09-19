import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_gr6ubgr.css';
import '../../css/g/g77xgdc7h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_gr6ubgr"/><path class="g77xgdc7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:data-mining"} {...others} />);
}

export default Component;
