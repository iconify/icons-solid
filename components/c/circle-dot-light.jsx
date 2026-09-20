import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1k_fi90e.css';
import '../../css/l/ly7yqvbmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1k_fi90e"/><path class="ly7yqvbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:circle-dot-light"} {...others} />);
}

export default Component;
