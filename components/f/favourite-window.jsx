import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjbttgbsa.css';
import '../../css/v/vzr9tvb2h.css';
import '../../css/z/zbbn00bvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rjbttgbsa"/><path class="vzr9tvb2h"/><path class="zbbn00bvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:favourite-window"} {...others} />);
}

export default Component;
