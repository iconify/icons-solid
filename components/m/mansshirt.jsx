import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr3ih6bwk.css';
import '../../css/u/u27dq2b5d.css';
import '../../css/f/f6teis-du.css';
import '../../css/p/pk24iqbfe.css';
import '../../css/d/dau5tac9s.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jr3ih6bwk"/><path class="u27dq2b5d"/><path class="f6teis-du"/><path class="pk24iqbfe"/><path class="dau5tac9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mansshirt"} {...others} />);
}

export default Component;
