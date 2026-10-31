import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s0hfy1b4i.css';
import '../../css/u/ukld4nbqg.css';
import '../../css/b/bk153zpaw.css';
import '../../css/q/qw20mr6si.css';
import '../../css/o/ottnm3b1w.css';
import '../../css/e/ea6bvv42w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="s0hfy1b4i wm-shadow"/><path class="ukld4nbqg"/><path class="bk153zpaw"/><path class="qw20mr6si"/><path class="ottnm3b1w"/><path class="ea6bvv42w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:factory"} {...others} />);
}

export default Component;
