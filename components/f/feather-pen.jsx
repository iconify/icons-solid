import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-ugy7b_n.css';
import '../../css/e/eqwq2xb3f.css';
import '../../css/t/t9l38ii3d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="z-ugy7b_n"/><path class="eqwq2xb3f"/><path class="t9l38ii3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:feather-pen"} {...others} />);
}

export default Component;
