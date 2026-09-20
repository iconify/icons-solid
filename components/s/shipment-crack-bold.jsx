import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm8a7_bwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nm8a7_bwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-crack-bold"} {...others} />);
}

export default Component;
