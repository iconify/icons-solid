import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba6xwccra.css';
import '../../css/l/l1u6ybcci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ba6xwccra"/><path class="l1u6ybcci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:camera"} {...others} />);
}

export default Component;
