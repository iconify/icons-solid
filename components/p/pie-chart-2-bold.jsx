import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbf_yzbjl.css';
import '../../css/p/p3f1qdw5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xbf_yzbjl"/><path class="p3f1qdw5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pie-chart-2-bold"} {...others} />);
}

export default Component;
