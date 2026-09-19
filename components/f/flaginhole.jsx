import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asm-7qbsk.css';
import '../../css/h/hl_9gq79s.css';
import '../../css/j/js9boidqq.css';
import '../../css/q/qm671n1cy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="asm-7qbsk"/><ellipse class="hl_9gq79s"/><path class="js9boidqq"/><path class="qm671n1cy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:flaginhole"} {...others} />);
}

export default Component;
