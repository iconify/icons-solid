import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8r_jcbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m8r_jcbgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:signal-cellular-1-fill"} {...others} />);
}

export default Component;
