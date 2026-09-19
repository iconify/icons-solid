import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt_jtfb1h.css';
import '../../css/g/gw8h__b-x.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="mt_jtfb1h"/><path class="gw8h__b-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:postcss-wordmark"} {...others} />);
}

export default Component;
