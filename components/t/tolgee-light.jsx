import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz-xe4l0u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kz-xe4l0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tolgee-light"} {...others} />);
}

export default Component;
