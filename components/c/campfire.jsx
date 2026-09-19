import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbiu97owb.css';
import '../../css/k/kti4eo0qw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kbiu97owb"/><path class="kti4eo0qw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:campfire"} {...others} />);
}

export default Component;
