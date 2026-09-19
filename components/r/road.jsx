import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acytf3bne.css';
import '../../css/j/jt6jm6b9v.css';
import '../../css/i/ipe9o7b3y.css';
import '../../css/v/v_o-8jsyz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="acytf3bne"/><path class="jt6jm6b9v"/><path class="ipe9o7b3y"/><path class="v_o-8jsyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:road"} {...others} />);
}

export default Component;
