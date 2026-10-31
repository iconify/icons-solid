import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/one60_0vi.css';
import '../../css/v/v1c_f61mw.css';
import '../../css/y/ytyhcihbd.css';
import '../../css/q/q0zy3zhuo.css';
import '../../css/y/yfgly-a8z.css';
import '../../css/e/eixmj0bvu.css';
import '../../css/p/p62400bbe.css';
import '../../css/r/re9dwksld.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="one60_0vi"/><path class="v1c_f61mw"/><path class="ytyhcihbd"/><path class="q0zy3zhuo"/><path class="yfgly-a8z"/><path class="eixmj0bvu"/><path class="p62400bbe"/><path clip-rule="evenodd" class="re9dwksld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:roll-safe"} {...others} />);
}

export default Component;
