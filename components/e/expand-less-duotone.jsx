import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8q0sd-0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8q0sd-0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:expand-less-duotone"} {...others} />);
}

export default Component;
