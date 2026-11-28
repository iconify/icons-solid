import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u45dg3bwf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qeq7gbben.css';
import '../../css/j/jbsk87b5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary u45dg3bwf"/><g class="dt0cm9dhy primary"><path class="qeq7gbben"/><path class="jbsk87b5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:airplay-duo"} {...others} />);
}

export default Component;
