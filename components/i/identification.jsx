import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdhl94coo.css';
import '../../css/l/lzvsylpnr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tdhl94coo"/><path class="lzvsylpnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:identification"} {...others} />);
}

export default Component;
