import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/e/eazw51owu.css';
import '../../css/o/ons53cb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="eazw51owu"/><circle class="ons53cb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:compas-mini-light"} {...others} />);
}

export default Component;
