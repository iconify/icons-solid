import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nttp5bcbi.css';
import '../../css/u/uzxqaob3s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nttp5bcbi"/><path class="uzxqaob3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:citibank"} {...others} />);
}

export default Component;
