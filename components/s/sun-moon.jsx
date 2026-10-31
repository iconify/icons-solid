import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/olq6oubjb.css';
import '../../css/g/gwcln_b5z.css';
import '../../css/w/w7h20mb6q.css';
import '../../css/q/q08n-4bjs.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="olq6oubjb"/><path class="gwcln_b5z wm-shine"/><path class="w7h20mb6q wm-k"/><path class="q08n-4bjs wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sun-moon"} {...others} />);
}

export default Component;
