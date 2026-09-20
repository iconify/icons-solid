import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwxp7xb5e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gwxp7xb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:z-wave-js-ui-dark"} {...others} />);
}

export default Component;
