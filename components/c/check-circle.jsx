import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytv8j6l6t.css';
import '../../css/q/q5418bbsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ytv8j6l6t"/><path class="q5418bbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:check-circle"} {...others} />);
}

export default Component;
