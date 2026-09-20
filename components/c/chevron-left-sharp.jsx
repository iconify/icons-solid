import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kczmf1wlc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kczmf1wlc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevron-left-sharp"} {...others} />);
}

export default Component;
