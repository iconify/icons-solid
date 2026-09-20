import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhvgldbdn.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="dhvgldbdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:sd-card-filled"} {...others} />);
}

export default Component;
