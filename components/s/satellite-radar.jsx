import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lclbo1n2e.css';
import '../../css/h/helnm_mgv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lclbo1n2e"/><path class="helnm_mgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:satellite-radar"} {...others} />);
}

export default Component;
