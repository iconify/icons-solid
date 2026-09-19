import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn06qxi9h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yn06qxi9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:renew-alt"} {...others} />);
}

export default Component;
