import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z05uk-bek.css';
import '../../css/t/t4zxnwuot.css';
import '../../css/q/qpz7cvbsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><ellipse class="z05uk-bek"/><path class="t4zxnwuot"/><path class="qpz7cvbsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:marketing"} {...others} />);
}

export default Component;
