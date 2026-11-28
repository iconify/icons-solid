import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vl-jeaccl.css';
import '../../css/o/ogr6nyb5z.css';
import '../../css/e/eqhxsr92t.css';
import '../../css/x/xtnobacur.css';
import '../../css/s/s0w6u6b-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vl-jeaccl"/><path class="ogr6nyb5z"/><path class="eqhxsr92t"/><path class="xtnobacur"/><path class="s0w6u6b-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:letter-spacing-duo"} {...others} />);
}

export default Component;
