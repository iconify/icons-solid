import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unhw0aboo.css';
import '../../css/o/orl944wbu.css';
import '../../css/f/fhikcfy3j.css';
import '../../css/e/emoy9fbht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="unhw0aboo"/><path class="orl944wbu"/><path class="fhikcfy3j"/><path class="emoy9fbht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:clipboard-paste-duotone"} {...others} />);
}

export default Component;
