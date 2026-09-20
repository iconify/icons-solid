import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2dw42tyk.css';
import '../../css/n/n9q2ej5ie.css';
import '../../css/m/mnz3z3wzp.css';

const viewBox = {"width":300,"height":300};
const content = `<path class="c2dw42tyk"/><path class="n9q2ej5ie"/><path class="mnz3z3wzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:foxpro"} {...others} />);
}

export default Component;
