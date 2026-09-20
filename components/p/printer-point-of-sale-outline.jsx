import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xji5qxura.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xji5qxura"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:printer-point-of-sale-outline"} {...others} />);
}

export default Component;
