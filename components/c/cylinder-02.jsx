import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i5c-on1sp.css';
import '../../css/b/bvhivqbfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i5c-on1sp"/><path class="bvhivqbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cylinder-02"} {...others} />);
}

export default Component;
