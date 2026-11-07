import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umqx0z94l.css';
import '../../css/q/qbcs2nxgg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="umqx0z94l"/><path class="qbcs2nxgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diagram-up-bold"} {...others} />);
}

export default Component;
