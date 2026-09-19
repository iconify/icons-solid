import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzxetnbiv.css';
import '../../css/x/xdjatpcmi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gzxetnbiv"/><path class="xdjatpcmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:intersect"} {...others} />);
}

export default Component;
