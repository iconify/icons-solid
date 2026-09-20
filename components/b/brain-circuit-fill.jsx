import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uwqh9mqqs.css';
import '../../css/p/pg13u4ygs.css';
import '../../css/e/ei48vjbzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uwqh9mqqs"/><path class="pg13u4ygs"/><path class="ei48vjbzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:brain-circuit-fill"} {...others} />);
}

export default Component;
