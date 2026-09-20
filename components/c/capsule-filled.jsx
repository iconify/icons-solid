import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne9la_bfq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ne9la_bfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:capsule-filled"} {...others} />);
}

export default Component;
