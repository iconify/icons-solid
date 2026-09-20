import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja0rtindj.css';
import '../../css/r/r2_b8cbdy.css';
import '../../css/b/bfx0rej2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ja0rtindj"/><path class="r2_b8cbdy"/><path class="bfx0rej2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:eye-duotone"} {...others} />);
}

export default Component;
