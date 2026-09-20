import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce_5lo_lk.css';
import '../../css/o/opmfvvg-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ce_5lo_lk"/><path class="opmfvvg-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:magento-logo-solid"} {...others} />);
}

export default Component;
