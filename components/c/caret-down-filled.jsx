import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4-cy2bhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q4-cy2bhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:caret-down-filled"} {...others} />);
}

export default Component;
