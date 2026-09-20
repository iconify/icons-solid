import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/u/ubhyikblw.css';
import '../../css/e/e4xkq0rzn.css';
import '../../css/u/u1d-vac7q.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="ubhyikblw"/><path class="e4xkq0rzn"/><path class="u1d-vac7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:product-cloth"} {...others} />);
}

export default Component;
