import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6ph0ccpa.css';
import '../../css/u/uxitrobbq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6ph0ccpa"/><path class="uxitrobbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:delivery-truck-fill"} {...others} />);
}

export default Component;
