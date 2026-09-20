import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz1afleut.css';
import '../../css/t/tu0c2bydb.css';
import '../../css/a/a5u7e1buv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cz1afleut"/><path class="tu0c2bydb"/><path class="a5u7e1buv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:hat-2-duo"} {...others} />);
}

export default Component;
