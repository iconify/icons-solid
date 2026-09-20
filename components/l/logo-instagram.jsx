import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxezv4bar.css';
import '../../css/k/k-ma4qafd.css';
import '../../css/t/thvl62kla.css';
import '../../css/c/cg77kzb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oxezv4bar"/><path class="k-ma4qafd"/><path class="thvl62kla"/><path class="cg77kzb9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-instagram"} {...others} />);
}

export default Component;
