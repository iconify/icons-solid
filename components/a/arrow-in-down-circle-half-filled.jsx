import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx4tahbow.css';
import '../../css/g/ge30ml4_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cx4tahbow"/><path class="ge30ml4_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-down-circle-half-filled"} {...others} />);
}

export default Component;
