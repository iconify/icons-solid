import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5pk2n8fa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e5pk2n8fa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:certification"} {...others} />);
}

export default Component;
