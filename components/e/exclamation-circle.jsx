import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1e3frofp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1e3frofp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:exclamation-circle"} {...others} />);
}

export default Component;
