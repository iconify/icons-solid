import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it66n4bjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="it66n4bjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-pull-request-closed"} {...others} />);
}

export default Component;
