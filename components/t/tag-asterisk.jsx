import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7vj0622h.css';
import '../../css/o/o6a_hsykw.css';
import '../../css/h/hmvp54drn.css';
import '../../css/t/t9r7g6nbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c7vj0622h"/><path class="o6a_hsykw"/><path class="hmvp54drn"/><path class="t9r7g6nbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tag-asterisk"} {...others} />);
}

export default Component;
