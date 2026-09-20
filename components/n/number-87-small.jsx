import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa8-6wb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qa8-6wb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:number-87-small"} {...others} />);
}

export default Component;
