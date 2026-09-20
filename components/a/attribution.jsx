import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fnv3fzuqn.css';
import '../../css/k/kbth6eboe.css';
import '../../css/a/a3a7kvl8j.css';
import '../../css/n/n9j0meb9v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="fnv3fzuqn"/><path class="kbth6eboe"/><path class="a3a7kvl8j"/><path class="n9j0meb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:attribution"} {...others} />);
}

export default Component;
