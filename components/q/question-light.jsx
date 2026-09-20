import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dr7avqm6c.css';
import '../../css/r/rhx6aqb6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dr7avqm6c"/><path class="rhx6aqb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:question-light"} {...others} />);
}

export default Component;
