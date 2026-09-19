import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t59wq0bcq.css';
import '../../css/e/e71w-2bnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t59wq0bcq"/><path class="e71w-2bnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:picture-in-picture-close"} {...others} />);
}

export default Component;
