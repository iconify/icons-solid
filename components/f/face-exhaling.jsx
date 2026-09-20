import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c73dvsags.css';
import '../../css/g/gw3qyzjjo.css';
import '../../css/v/vrwjwtb1r.css';
import '../../css/q/qkzavbb7t.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/e/e28fgvd7d.css';
import '../../css/t/ttc5l5bto.css';
import '../../css/w/wn7_7mbtx.css';

const viewBox = {"width":72,"height":72};
const content = `<g transform="translate(-.466 .28)"><circle class="c73dvsags"/><path class="gw3qyzjjo"/><path class="vrwjwtb1r"/><ellipse class="qkzavbb7t"/></g><g class="jn8qy4bru"><path class="e28fgvd7d"/><path class="ttc5l5bto"/><path class="wn7_7mbtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-exhaling"} {...others} />);
}

export default Component;
