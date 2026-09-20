import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf4qnrbtb.css';
import '../../css/v/vdot4tock.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rf4qnrbtb"/><path class="vdot4tock"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:outbox-light"} {...others} />);
}

export default Component;
