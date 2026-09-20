import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o1384db4z.css';
import '../../css/q/qmo25k6tv.css';
import '../../css/h/hny-s1b9h.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o1384db4z"/><path class="qmo25k6tv"/><path clip-rule="evenodd" class="hny-s1b9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:send-email-flat"} {...others} />);
}

export default Component;
