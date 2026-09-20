import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9wncd_8q.css';
import '../../css/m/mlk-ksb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9wncd_8q"/><path class="mlk-ksb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-group-duotone"} {...others} />);
}

export default Component;
