import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mit5f8bas.css';
import '../../css/e/ek_6wsbdj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mit5f8bas"/><path class="ek_6wsbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rain-heavy"} {...others} />);
}

export default Component;
