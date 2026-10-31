import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/ml0cd1oob.css';
import '../../css/a/a-s_v3w7y.css';
import '../../css/i/i6yp93bst.css';
import '../../css/j/j9br22bqu.css';
import '../../css/v/vjr8b9jwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ml0cd1oob"/><path class="a-s_v3w7y wm-shine"/><path class="i6yp93bst wm-k"/><path class="j9br22bqu wm-a"/><path class="vjr8b9jwh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-frog"} {...others} />);
}

export default Component;
