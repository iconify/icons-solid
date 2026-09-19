import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdsu42b0b.css';
import '../../css/r/rz90g2b4y.css';
import '../../css/g/g0ayhhqoh.css';
import '../../css/c/cr79zmb6s.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="jdsu42b0b"/><path class="rz90g2b4y"/><path class="g0ayhhqoh"/><path class="cr79zmb6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cd-create-exchange"} {...others} />);
}

export default Component;
