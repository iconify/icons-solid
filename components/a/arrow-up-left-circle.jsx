import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq9pkcaia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nq9pkcaia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-up-left-circle"} {...others} />);
}

export default Component;
