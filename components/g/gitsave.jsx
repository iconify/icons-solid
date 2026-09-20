import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-6bvg8-p.css';
import '../../css/n/naowi_jsy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l-6bvg8-p"/><path class="naowi_jsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gitsave"} {...others} />);
}

export default Component;
