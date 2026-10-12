import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gte4k_rwf.css';
import '../../css/l/lmhgg8f3d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gte4k_rwf"/><path class="lmhgg8f3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:history-stroke-20"} {...others} />);
}

export default Component;
