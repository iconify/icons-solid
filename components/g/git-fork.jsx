import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s7vb2nxxp.css';
import '../../css/u/ujykvrsnu.css';
import '../../css/e/e5ttz1b5n.css';
import '../../css/s/sa9tbxvae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="s7vb2nxxp"/><path class="ujykvrsnu wm-shine"/><path class="e5ttz1b5n"/><path class="sa9tbxvae wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:git-fork"} {...others} />);
}

export default Component;
