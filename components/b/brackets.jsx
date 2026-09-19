import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysfr6k0aq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ysfr6k0aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:brackets"} {...others} />);
}

export default Component;
