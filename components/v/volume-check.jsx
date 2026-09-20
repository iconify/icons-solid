import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tslo0dblv.css';
import '../../css/e/eqh9zbbsl.css';
import '../../css/f/fvc-4gi-m.css';
import '../../css/a/ad2ovvbnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tslo0dblv"/><path class="eqh9zbbsl"/><path class="fvc-4gi-m"/><path class="ad2ovvbnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:volume-check"} {...others} />);
}

export default Component;
