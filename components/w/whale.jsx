import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1v1c9bod.css';
import '../../css/u/uyff9_bee.css';
import '../../css/e/e_hknpjpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a1v1c9bod"/><path class="uyff9_bee"/><path class="e_hknpjpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:whale"} {...others} />);
}

export default Component;
