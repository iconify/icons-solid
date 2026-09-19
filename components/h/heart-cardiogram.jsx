import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj_2eeb-k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pj_2eeb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:heart-cardiogram"} {...others} />);
}

export default Component;
