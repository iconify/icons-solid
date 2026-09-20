import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/px1i3m8dq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="px1i3m8dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:info-card-fill"} {...others} />);
}

export default Component;
