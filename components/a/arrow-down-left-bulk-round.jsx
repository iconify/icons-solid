import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7-8rccxv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e7-8rccxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-down-left-bulk-round"} {...others} />);
}

export default Component;
