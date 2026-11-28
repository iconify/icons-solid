import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwezv1bkt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iwezv1bkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gate-buffer-tri-state-solid"} {...others} />);
}

export default Component;
