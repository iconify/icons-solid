import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fp7ovzjoy.css';
import '../../css/a/avhjy34yu.css';
import '../../css/f/fmoam2-cy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fp7ovzjoy"/><path class="avhjy34yu"/><path class="fmoam2-cy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-loud-bold"} {...others} />);
}

export default Component;
