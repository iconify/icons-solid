import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aimebubco.css';
import '../../css/o/ova0c4bsx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aimebubco"/><path class="ova0c4bsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-search-bold"} {...others} />);
}

export default Component;
