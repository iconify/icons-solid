import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/owmyv-bwt.css';
import '../../css/d/d9ysxzb2u.css';
import '../../css/j/jjja0hbbw.css';
import '../../css/y/y6u435q1n.css';
import '../../css/v/vow033b0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="owmyv-bwt"/><path class="d9ysxzb2u"/><path class="jjja0hbbw"/><path class="y6u435q1n"/><path class="vow033b0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ssd-round-line-duotone"} {...others} />);
}

export default Component;
