import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpholnzeo.css';
import '../../css/t/t3zbj22fa.css';
import '../../css/j/j7seq4bbf.css';
import '../../css/z/z3ck36bfj.css';
import '../../css/e/e3-urhbop.css';
import '../../css/c/cs994mb8w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jpholnzeo"/><path class="t3zbj22fa"/><path class="j7seq4bbf"/><path class="z3ck36bfj"/><path class="e3-urhbop"/><path class="cs994mb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:awin"} {...others} />);
}

export default Component;
