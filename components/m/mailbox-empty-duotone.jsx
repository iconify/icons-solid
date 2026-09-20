import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rx1qtac8g.css';
import '../../css/w/wkho5gbiz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rx1qtac8g"/><path class="wkho5gbiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:mailbox-empty-duotone"} {...others} />);
}

export default Component;
