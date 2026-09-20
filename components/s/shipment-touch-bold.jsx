import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p82w3lb4c.css';
import '../../css/q/qjxo69b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p82w3lb4c"/><path class="qjxo69b2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-touch-bold"} {...others} />);
}

export default Component;
