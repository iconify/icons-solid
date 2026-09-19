import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fppk0pz3y.css';
import '../../css/z/zay7feb1d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fppk0pz3y"/><path class="zay7feb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:warning-hex-filled"} {...others} />);
}

export default Component;
