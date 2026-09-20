import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e5-omtbsh.css';
import '../../css/u/u2m-y9pev.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="e5-omtbsh"/><path class="u2m-y9pev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:tune-adjust-volume"} {...others} />);
}

export default Component;
