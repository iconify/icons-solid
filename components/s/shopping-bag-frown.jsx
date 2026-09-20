import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mt16x-byl.css';
import '../../css/f/fburqup6o.css';
import '../../css/y/y8kks257e.css';
import '../../css/a/a0h7dlbic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mt16x-byl"/><path class="fburqup6o"/><path class="y8kks257e"/><path class="a0h7dlbic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shopping-bag-frown"} {...others} />);
}

export default Component;
