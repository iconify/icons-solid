import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbl-y_rlh.css';
import '../../css/x/xxl63pf9y.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="mbl-y_rlh"/><path class="xxl63pf9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:translate"} {...others} />);
}

export default Component;
