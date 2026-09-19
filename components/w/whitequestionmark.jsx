import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp0wpw-wa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mp0wpw-wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:whitequestionmark"} {...others} />);
}

export default Component;
