import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2n5tfj3d.css';
import '../../css/o/otbcz-b5x.css';
import '../../css/q/qhmpv3bci.css';
import '../../css/c/c17uzvb_m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i2n5tfj3d"/><path class="otbcz-b5x"/><path class="qhmpv3bci"/><path class="c17uzvb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pathfinder-minus-front-1"} {...others} />);
}

export default Component;
