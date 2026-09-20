import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ye6kfhynn.css';
import '../../css/g/g_q5xsakd.css';
import '../../css/v/v7cq--kdp.css';
import '../../css/g/gdplqfzsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ye6kfhynn"/><path class="g_q5xsakd"/><path class="v7cq--kdp"/><path class="gdplqfzsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:seafood-sushi"} {...others} />);
}

export default Component;
