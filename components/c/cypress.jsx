import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfttfe_2y.css';
import '../../css/l/leakr4_1e.css';
import '../../css/f/fudu618jx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qfttfe_2y"><path class="leakr4_1e"/><path class="fudu618jx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:cypress"} {...others} />);
}

export default Component;
