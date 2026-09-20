import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/somk75bve.css';
import '../../css/a/aut7-_08f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="somk75bve"/><path class="aut7-_08f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-bend-up-right-2-arrow-bend-curve-change-direction-up-to-right"} {...others} />);
}

export default Component;
