import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iv908nr8d.css';
import '../../css/b/bu_wj55_z.css';
import '../../css/h/h60q2pbzt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="iv908nr8d"/><path class="bu_wj55_z"/><path clip-rule="evenodd" class="h60q2pbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:tune-adjust-volume-flat"} {...others} />);
}

export default Component;
