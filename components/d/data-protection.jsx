import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqugpjbox.css';
import '../../css/g/g8h-pj3bn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mqugpjbox"/><path class="g8h-pj3bn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:data-protection"} {...others} />);
}

export default Component;
