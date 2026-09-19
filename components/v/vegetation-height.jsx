import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7me47nlj.css';
import '../../css/r/ryesqkbnu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l7me47nlj"/><path class="ryesqkbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:vegetation-height"} {...others} />);
}

export default Component;
