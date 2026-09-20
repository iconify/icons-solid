import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mohy3egad.css';
import '../../css/l/l50tbtt0s.css';
import '../../css/x/xzji5abki.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/blhfv23vd.css';
import '../../css/e/erlzp3bbp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mohy3egad"/><path class="l50tbtt0s"/><path class="xzji5abki"/><g class="ij2x_72vy"><path class="blhfv23vd"/><path class="erlzp3bbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rice-cracker"} {...others} />);
}

export default Component;
