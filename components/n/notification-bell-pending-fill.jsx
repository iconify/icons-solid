import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz_le0wpd.css';
import '../../css/e/ewl5wjk4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pz_le0wpd"/><path class="ewl5wjk4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:notification-bell-pending-fill"} {...others} />);
}

export default Component;
