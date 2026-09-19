import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey-koukvr.css';
import '../../css/n/n11wxrbsg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ey-koukvr"/><path class="n11wxrbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:university"} {...others} />);
}

export default Component;
