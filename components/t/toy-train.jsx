import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ec_xsy4gs.css';
import '../../css/b/bf9hqaclw.css';
import '../../css/a/az8wk3mni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="ec_xsy4gs"/><circle class="bf9hqaclw"/><path class="az8wk3mni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:toy-train"} {...others} />);
}

export default Component;
