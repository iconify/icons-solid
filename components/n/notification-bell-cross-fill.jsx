import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itr0olbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="itr0olbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:notification-bell-cross-fill"} {...others} />);
}

export default Component;
