import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrj6w4b_k.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="hrj6w4b_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:penis"} {...others} />);
}

export default Component;
