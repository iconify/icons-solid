import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pudli4roa.css';
import '../../css/t/ty5w7mrdw.css';
import '../../css/v/v0vli9eqs.css';
import '../../css/f/fr98mpz8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pudli4roa"/><path class="ty5w7mrdw"/><path class="v0vli9eqs"/><path clip-rule="evenodd" class="fr98mpz8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ghost-smile-outline"} {...others} />);
}

export default Component;
