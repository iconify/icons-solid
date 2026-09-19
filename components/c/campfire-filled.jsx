import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kti4eo0qw.css';
import '../../css/n/n7mu1nbgn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kti4eo0qw"/><path class="n7mu1nbgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:campfire-filled"} {...others} />);
}

export default Component;
