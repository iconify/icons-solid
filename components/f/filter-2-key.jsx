import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iliuq1b8y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iliuq1b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:filter-2-key"} {...others} />);
}

export default Component;
