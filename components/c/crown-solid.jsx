import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbjg4bc7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbjg4bc7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:crown-solid"} {...others} />);
}

export default Component;
