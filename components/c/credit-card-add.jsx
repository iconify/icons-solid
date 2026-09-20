import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw-n5ubeb.css';
import '../../css/q/q15f3bbny.css';
import '../../css/i/ijnim64fb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cw-n5ubeb"/><path class="q15f3bbny"/><path class="ijnim64fb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:credit-card-add"} {...others} />);
}

export default Component;
