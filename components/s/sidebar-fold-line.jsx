import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb023bcmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qb023bcmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:sidebar-fold-line"} {...others} />);
}

export default Component;
