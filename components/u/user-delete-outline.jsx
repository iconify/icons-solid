import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqyamvt_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqyamvt_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:user-delete-outline"} {...others} />);
}

export default Component;
