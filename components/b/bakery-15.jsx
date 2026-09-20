import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrde4zxpv.css';
import '../../css/m/m-85-0blw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qrde4zxpv"/><path class="m-85-0blw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:bakery-15"} {...others} />);
}

export default Component;
