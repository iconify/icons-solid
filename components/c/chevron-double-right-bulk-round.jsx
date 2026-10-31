import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf2eypbqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kf2eypbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chevron-double-right-bulk-round"} {...others} />);
}

export default Component;
