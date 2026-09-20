import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulj6f9bpb.css';
import '../../css/k/k12cdmnwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ulj6f9bpb"/><path class="k12cdmnwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pyth"} {...others} />);
}

export default Component;
