import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz296k4st.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dz296k4st"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:ink-pen-add"} {...others} />);
}

export default Component;
