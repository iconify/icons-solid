import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/riz3hy1-t.css';
import '../../css/j/jriq20k1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><circle class="riz3hy1-t"/><path class="jriq20k1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:clock"} {...others} />);
}

export default Component;
