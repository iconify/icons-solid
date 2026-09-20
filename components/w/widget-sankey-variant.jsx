import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l155kb_ad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l155kb_ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:widget-sankey-variant"} {...others} />);
}

export default Component;
