import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a3rfbyb6g.css';
import '../../css/q/qmnynrcvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a3rfbyb6g"/><path class="qmnynrcvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:safe-arrow-left"} {...others} />);
}

export default Component;
