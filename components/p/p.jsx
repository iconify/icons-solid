import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prou6k_-r.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="prou6k_-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:p"} {...others} />);
}

export default Component;
