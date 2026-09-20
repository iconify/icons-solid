import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnymf-bmk.css';
import '../../css/u/u3y7c2axj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bnymf-bmk"/><path class="u3y7c2axj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:clubs-symbol"} {...others} />);
}

export default Component;
