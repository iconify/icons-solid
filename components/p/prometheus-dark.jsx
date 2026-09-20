import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc1qq-8ro.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nc1qq-8ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:prometheus-dark"} {...others} />);
}

export default Component;
