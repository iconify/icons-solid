import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfttfe_2y.css';
import '../../css/j/jiqwlhp5k.css';
import '../../css/d/d-unpqbnf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qfttfe_2y"><path class="jiqwlhp5k"/><path class="d-unpqbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:histoire"} {...others} />);
}

export default Component;
