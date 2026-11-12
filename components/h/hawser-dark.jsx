import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e53pislml.css';
import '../../css/z/zzm1u_hwi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e53pislml"/><path class="zzm1u_hwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hawser-dark"} {...others} />);
}

export default Component;
