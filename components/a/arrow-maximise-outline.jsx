import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prd1j7b1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="prd1j7b1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:arrow-maximise-outline"} {...others} />);
}

export default Component;
