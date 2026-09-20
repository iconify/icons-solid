import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frtsr5bnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frtsr5bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:x-power-y"} {...others} />);
}

export default Component;
