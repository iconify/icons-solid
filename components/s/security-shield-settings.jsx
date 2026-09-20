import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nc1ozk_pl.css';
import '../../css/g/glgyo9tzv.css';
import '../../css/m/mbub22b_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="nc1ozk_pl"/><path class="glgyo9tzv"/><path class="mbub22b_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:security-shield-settings"} {...others} />);
}

export default Component;
