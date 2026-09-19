import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u6sf2yaha.css';
import '../../css/n/n2uwyqbsw.css';
import '../../css/i/ie281-b7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u6sf2yaha"/><path class="n2uwyqbsw"/><path class="ie281-b7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stroke-center"} {...others} />);
}

export default Component;
