import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evuw--j0u.css';
import '../../css/a/aqf9z3bkm.css';
import '../../css/t/tr0h4ne-d.css';
import '../../css/f/fjit4obrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="evuw--j0u"/><path class="aqf9z3bkm"/><path class="tr0h4ne-d"/><path class="fjit4obrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:rating-star-winner"} {...others} />);
}

export default Component;
