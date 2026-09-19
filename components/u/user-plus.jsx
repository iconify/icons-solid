import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpmg4f9qv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mpmg4f9qv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:user-plus"} {...others} />);
}

export default Component;
