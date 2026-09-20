import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/z/z04drlb1l.css';
import '../../css/s/sgor8wbzm.css';
import '../../css/f/ff7mynj7b.css';
import '../../css/h/h3w_jji0j.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><g class="z04drlb1l"><circle class="sgor8wbzm"/><path class="ff7mynj7b"/><path class="h3w_jji0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:smiling-face-with-smiling-eyes"} {...others} />);
}

export default Component;
