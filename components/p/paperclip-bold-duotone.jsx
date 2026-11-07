import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2bnn7ohn.css';
import '../../css/j/jkdbh9btb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k2bnn7ohn"/><path class="jkdbh9btb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paperclip-bold-duotone"} {...others} />);
}

export default Component;
