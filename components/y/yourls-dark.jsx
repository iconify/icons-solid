import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emhy2jo_m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="emhy2jo_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yourls-dark"} {...others} />);
}

export default Component;
