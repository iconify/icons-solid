import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/g/gx85gbbnh.css';
import '../../css/z/z6kbq_bzk.css';
import '../../css/o/og6a1ng5c.css';
import '../../css/l/lvfkzebln.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="gx85gbbnh"/><path class="z6kbq_bzk"/><path class="og6a1ng5c"/><path class="lvfkzebln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:coconut-tree"} {...others} />);
}

export default Component;
