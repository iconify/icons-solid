import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fnzuxjcax.css';
import '../../css/u/u4sxwwy9k.css';
import '../../css/b/bum_z6bnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fnzuxjcax"/><path class="u4sxwwy9k"/><path class="bum_z6bnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rows-4"} {...others} />);
}

export default Component;
