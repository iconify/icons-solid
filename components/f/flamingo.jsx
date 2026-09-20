import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxg94rb_l.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/t9rd3ac0o.css';
import '../../css/u/ujpkbubht.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bxg94rb_l"/><g class="ij2x_72vy"><path class="t9rd3ac0o"/><path class="ujpkbubht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flamingo"} {...others} />);
}

export default Component;
