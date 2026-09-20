import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcmznibzp.css';
import '../../css/o/of6h3jbln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcmznibzp"/><path class="of6h3jbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-cargo-boat-bold"} {...others} />);
}

export default Component;
