import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnbx2b2zx.css';
import '../../css/j/j8kuw0sgj.css';
import '../../css/f/fr98mpz8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vnbx2b2zx"/><path class="j8kuw0sgj"/><path clip-rule="evenodd" class="fr98mpz8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ghost-outline"} {...others} />);
}

export default Component;
