import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zrwac-b_a.css';
import '../../css/f/f2_66lwsz.css';
import '../../css/a/ac0eq3kar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zrwac-b_a"/><path class="f2_66lwsz"/><path class="ac0eq3kar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-off"} {...others} />);
}

export default Component;
