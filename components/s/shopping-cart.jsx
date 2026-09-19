import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ive6bserv.css';
import '../../css/u/ur8mbpnqr.css';
import '../../css/n/nxheq_lap.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="ive6bserv"/><circle class="ur8mbpnqr"/><path class="nxheq_lap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:shopping-cart"} {...others} />);
}

export default Component;
