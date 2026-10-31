import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tmhs8r1ps.css';
import '../../css/d/d_xs8tbkb.css';
import '../../css/b/bf3cxvlkw.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tmhs8r1ps"/><path class="d_xs8tbkb wm-shine"/><path class="bf3cxvlkw"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:git-commit"} {...others} />);
}

export default Component;
