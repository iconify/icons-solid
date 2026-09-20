import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej5bhbbvo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ej5bhbbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:magento-logo-block"} {...others} />);
}

export default Component;
