import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nttdkvbwv.css';
import '../../css/a/atxln4p5z.css';
import '../../css/n/ny2ojebag.css';
import '../../css/p/p3xekojef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nttdkvbwv"/><path class="atxln4p5z"/><path class="ny2ojebag"/><path class="p3xekojef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:female"} {...others} />);
}

export default Component;
