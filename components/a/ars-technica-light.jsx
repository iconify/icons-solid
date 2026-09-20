import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od1i-5lhx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="od1i-5lhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ars-technica-light"} {...others} />);
}

export default Component;
