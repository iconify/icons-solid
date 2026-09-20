import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywkgkr1pi.css';
import '../../css/s/slgmhktay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ywkgkr1pi"/><path class="slgmhktay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-star-bold"} {...others} />);
}

export default Component;
