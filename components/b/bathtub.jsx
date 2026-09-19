import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pda2nj2-h.css';
import '../../css/p/p5a431nyw.css';
import '../../css/n/nh1vg0-7e.css';
import '../../css/h/h53urobcy.css';
import '../../css/r/roszgbbtf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pda2nj2-h"/><path class="p5a431nyw"/><path class="nh1vg0-7e"/><path class="h53urobcy"/><path class="roszgbbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bathtub"} {...others} />);
}

export default Component;
