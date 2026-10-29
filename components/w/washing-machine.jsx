import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxsmvwbkk.css';
import '../../css/q/qb0s-jc0c.css';
import '../../css/q/q7hleknpx.css';
import '../../css/c/cbdewqb9y.css';
import '../../css/e/e23mhcctw.css';
import '../../css/q/qezhtdoug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxsmvwbkk wm-k"/><path class="qb0s-jc0c wm-a"/><path class="q7hleknpx wm-a"/><path class="cbdewqb9y wm-a"/><path class="e23mhcctw wm-k"/><path class="qezhtdoug wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:washing-machine"} {...others} />);
}

export default Component;
