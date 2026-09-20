import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x4l2r92ma.css';
import '../../css/j/jnj0g8b4e.css';
import '../../css/e/e9_m8lzcu.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="x4l2r92ma"/><path class="jnj0g8b4e"/><path class="e9_m8lzcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:information-square"} {...others} />);
}

export default Component;
