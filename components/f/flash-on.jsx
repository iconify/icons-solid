import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve-_k2a0b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ve-_k2a0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:flash-on"} {...others} />);
}

export default Component;
