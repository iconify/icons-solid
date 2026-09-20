import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpa4lnb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vpa4lnb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:barcode-duotone"} {...others} />);
}

export default Component;
