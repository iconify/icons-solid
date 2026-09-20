import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clz8sab3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="clz8sab3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-2-bold"} {...others} />);
}

export default Component;
