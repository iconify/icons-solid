import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_igsccvz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/diqg_sbxg.css';
import '../../css/e/e11icibaw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_igsccvz secondary"/><g class="dt0cm9dhy primary"><path class="diqg_sbxg"/><path class="e11icibaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pill-duo"} {...others} />);
}

export default Component;
