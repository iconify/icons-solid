import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcjmqabzq.css';
import '../../css/z/z3xga4ujl.css';
import '../../css/n/n_9cd_bbo.css';
import '../../css/f/f3corxbhu.css';
import '../../css/c/c_-nv7ewo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bcjmqabzq"/><path class="z3xga4ujl"/><path class="n_9cd_bbo"/><path class="f3corxbhu"/><path class="c_-nv7ewo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-generate-music-spark"} {...others} />);
}

export default Component;
