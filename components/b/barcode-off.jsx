import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk3k_6m-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mk3k_6m-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:barcode-off"} {...others} />);
}

export default Component;
