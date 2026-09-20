import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgowrvd1x.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="tgowrvd1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-cashier-bar-code-codes-tags-upc-barcode"} {...others} />);
}

export default Component;
