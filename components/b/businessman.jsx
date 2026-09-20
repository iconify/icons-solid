import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o000thbad.css';
import '../../css/p/pet-c9vnz.css';
import '../../css/x/xcttp9pcu.css';
import '../../css/m/mmsn7-b1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o000thbad"/><path class="pet-c9vnz"/><path class="xcttp9pcu"/><path class="mmsn7-b1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:businessman"} {...others} />);
}

export default Component;
