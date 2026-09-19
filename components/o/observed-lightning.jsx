import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf_710lax.css';
import '../../css/m/mrndicbcc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yf_710lax"/><path class="mrndicbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:observed-lightning"} {...others} />);
}

export default Component;
