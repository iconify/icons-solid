import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ev2uwsbpk.css';
import '../../css/h/h-oq0kbcn.css';
import '../../css/i/i6xjdtbiq.css';
import '../../css/s/s_jf28v_p.css';
import '../../css/s/sg1u4oh-u.css';
import '../../css/r/r5h4hkbcu.css';
import '../../css/k/kxlo67bdf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ev2uwsbpk"/><path class="h-oq0kbcn"/><path class="i6xjdtbiq"/><path class="s_jf28v_p"/><path class="sg1u4oh-u"/><path class="r5h4hkbcu"/><path class="kxlo67bdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:camera"} {...others} />);
}

export default Component;
