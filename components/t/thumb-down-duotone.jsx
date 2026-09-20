import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0kliu38q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e0kliu38q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:thumb-down-duotone"} {...others} />);
}

export default Component;
