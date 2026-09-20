import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/po_imbccw.css';
import '../../css/v/vla37tbfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="po_imbccw"/><path class="vla37tbfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:exclamation-circle-duotone"} {...others} />);
}

export default Component;
