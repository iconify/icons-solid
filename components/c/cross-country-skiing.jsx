import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l41g2w51k.css';
import '../../css/w/w98s6ebmu.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="l41g2w51k"/><path class="w98s6ebmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:cross-country-skiing"} {...others} />);
}

export default Component;
