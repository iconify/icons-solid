import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f99tpmb6q.css';
import '../../css/q/qamjhebaa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f99tpmb6q"/><path class="qamjhebaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-plus-duotone"} {...others} />);
}

export default Component;
