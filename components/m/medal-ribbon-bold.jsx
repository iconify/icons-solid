import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7gn9tbal.css';
import '../../css/g/g2_udexnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u7gn9tbal"/><path class="g2_udexnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbon-bold"} {...others} />);
}

export default Component;
