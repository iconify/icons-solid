import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyihu2byg.css';
import '../../css/p/pgnl-6cmr.css';
import '../../css/a/a4xs0knkz.css';
import '../../css/t/tv5rw3b3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oyihu2byg"/><path class="pgnl-6cmr"/><path class="a4xs0knkz"/><path class="tv5rw3b3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:gesture-double-tap"} {...others} />);
}

export default Component;
