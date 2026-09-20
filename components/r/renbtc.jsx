import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wetsv3agd.css';
import '../../css/q/quihcfbar.css';
import '../../css/k/k8agsabod.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wetsv3agd"/><path clip-rule="evenodd" class="quihcfbar"/><path class="k8agsabod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:renbtc"} {...others} />);
}

export default Component;
