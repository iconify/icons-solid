import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsa27y-9e.css';
import '../../css/v/vvve78bba.css';
import '../../css/u/uzl62cwjb.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="qsa27y-9e"/><path class="vvve78bba"/><path class="uzl62cwjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:cambodia"} {...others} />);
}

export default Component;
