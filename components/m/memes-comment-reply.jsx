import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/jguhxqblv.css';
import '../../css/r/ropjn8bte.css';
import '../../css/n/n4b5eqbfs.css';
import '../../css/c/cnd5bimug.css';
import '../../css/s/s1da2lklb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="jguhxqblv"/><path class="ropjn8bte"/><path class="n4b5eqbfs"/><path class="cnd5bimug"/><path class="s1da2lklb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:memes-comment-reply"} {...others} />);
}

export default Component;
