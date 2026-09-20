import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prmy9wtgl.css';
import '../../css/m/miwt5_b7t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="prmy9wtgl"/><path class="miwt5_b7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:senlo-light"} {...others} />);
}

export default Component;
