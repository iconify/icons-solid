import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1w7ufbzf.css';
import '../../css/w/w89phjbdg.css';
import '../../css/e/e8s0ikesh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="e1w7ufbzf"/><path clip-rule="evenodd" class="w89phjbdg"/><path class="e8s0ikesh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:memes-comment-reply-flat"} {...others} />);
}

export default Component;
