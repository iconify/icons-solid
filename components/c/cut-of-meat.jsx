import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz6gkrbil.css';
import '../../css/e/eqg4ddc9e.css';
import '../../css/f/foig20byy.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/yhga54b-i.css';
import '../../css/a/a731-2tvo.css';
import '../../css/g/g3pjqklsk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fz6gkrbil"/><path class="eqg4ddc9e"/><circle class="foig20byy"/><g class="ij2x_72vy"><path class="yhga54b-i"/><path class="a731-2tvo"/><circle class="g3pjqklsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cut-of-meat"} {...others} />);
}

export default Component;
