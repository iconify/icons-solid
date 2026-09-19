import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v-o7l4fmy.css';
import '../../css/c/cgdfzcb3d.css';
import '../../css/k/klq73dudp.css';
import '../../css/o/od5u5nb8e.css';
import '../../css/a/avu526spj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="v-o7l4fmy"/><path class="cgdfzcb3d"/><path class="klq73dudp"/><path class="od5u5nb8e"/><path class="avu526spj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bubble-tea-02"} {...others} />);
}

export default Component;
