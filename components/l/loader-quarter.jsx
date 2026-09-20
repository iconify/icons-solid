import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu62q_mcm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iu62q_mcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:loader-quarter"} {...others} />);
}

export default Component;
