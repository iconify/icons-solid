import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhdjjfm6r.css';
import '../../css/z/z6gs6rvum.css';
import '../../css/v/v-y_tpdhw.css';
import '../../css/m/m-4kgcb5p.css';
import '../../css/y/y35vapb1y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hhdjjfm6r"/><path class="z6gs6rvum"/><path class="v-y_tpdhw"/><path class="m-4kgcb5p"/><path class="y35vapb1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-connection-20-bold"} {...others} />);
}

export default Component;
