import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy0s7rb0s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sy0s7rb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:badge-info-filled"} {...others} />);
}

export default Component;
