import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2rcctbrf.css';
import '../../css/d/d6xs-gxot.css';
import '../../css/o/o7pw7f3gm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b2rcctbrf"/><circle transform="rotate(-180 11 11)" class="d6xs-gxot"/><path class="o7pw7f3gm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:pen-light"} {...others} />);
}

export default Component;
