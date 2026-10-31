import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/b/bk-t7ebto.css';
import '../../css/f/f_0k9gqhg.css';
import '../../css/i/iz2oy0b4f.css';
import '../../css/q/qf7wliomw.css';
import '../../css/l/ldkettsrg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="bk-t7ebto"/><path class="f_0k9gqhg"/><path class="iz2oy0b4f"/><path class="qf7wliomw"/><path class="ldkettsrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:smile"} {...others} />);
}

export default Component;
