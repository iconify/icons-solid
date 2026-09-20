import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndoigqbyg.css';
import '../../css/f/fjsmmybyw.css';
import '../../css/q/q6vee1b6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ndoigqbyg"/><path class="fjsmmybyw"/><path class="q6vee1b6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:spaghetti-fork"} {...others} />);
}

export default Component;
