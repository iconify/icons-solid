import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovpu7tbvu.css';
import '../../css/i/iahtnrboc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ovpu7tbvu"/><path class="iahtnrboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:invert-adjust"} {...others} />);
}

export default Component;
