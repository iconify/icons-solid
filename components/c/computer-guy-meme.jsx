import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kswykgbhr.css';
import '../../css/s/spq48-x9p.css';
import '../../css/s/sds3jrbbe.css';
import '../../css/h/htgmeebrk.css';
import '../../css/j/jhlrsublr.css';
import '../../css/p/p-oxzgb5v.css';
import '../../css/f/fms797bbc.css';
import '../../css/i/i3pt43fzf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y9tr6bcfx"><path class="kswykgbhr"/><path class="spq48-x9p"/><path class="sds3jrbbe"/><path class="htgmeebrk"/><path class="jhlrsublr"/><path class="p-oxzgb5v"/><path class="fms797bbc"/><path class="i3pt43fzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:computer-guy-meme"} {...others} />);
}

export default Component;
