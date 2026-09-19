import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya80we8aj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ya80we8aj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:reflect-horizontal-alt-filled"} {...others} />);
}

export default Component;
