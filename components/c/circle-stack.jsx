import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyqpfl7lx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eyqpfl7lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:circle-stack"} {...others} />);
}

export default Component;
