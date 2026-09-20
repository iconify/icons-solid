import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqyvu54rg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uqyvu54rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:twake-drive-dark"} {...others} />);
}

export default Component;
