import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uymgdabjo.css';
import '../../css/j/jpf_kcbts.css';
import '../../css/r/r5798bbfe.css';
import '../../css/f/fsip9nbyp.css';
import '../../css/o/op9bcu85a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uymgdabjo"/><path class="jpf_kcbts"/><path class="r5798bbfe"/><path class="fsip9nbyp"/><path class="op9bcu85a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:raised-hand-1"} {...others} />);
}

export default Component;
