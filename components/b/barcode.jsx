import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qykrqjwin.css';

const viewBox = {"width":1792,"height":1408};
const content = `<path class="qykrqjwin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:barcode"} {...others} />);
}

export default Component;
