import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fatg9ib1l.css';
import '../../css/e/ei72e1ltq.css';
import '../../css/u/u37866ghy.css';
import '../../css/k/kwfvx1__p.css';
import '../../css/b/b6mu38bbk.css';
import '../../css/j/jlytocbyx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fatg9ib1l"/><path class="ei72e1ltq"/><circle class="u37866ghy"/><g class="kwfvx1__p"><circle class="b6mu38bbk"/><path class="jlytocbyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:reading-ebook"} {...others} />);
}

export default Component;
