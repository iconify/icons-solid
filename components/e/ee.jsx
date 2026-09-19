import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6j6pfbcf.css';
import '../../css/u/uzhnzhb4n.css';
import '../../css/l/lstalfb9c.css';

const viewBox = {"width":301,"height":191};
const content = `<g class="ft5dv1b6b"><path class="z6j6pfbcf"/><path class="uzhnzhb4n"/><path class="lstalfb9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ee"} {...others} />);
}

export default Component;
