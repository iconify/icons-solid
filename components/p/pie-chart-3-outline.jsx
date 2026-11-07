import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyzoqq60w.css';
import '../../css/k/k5gsbk5ud.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dyzoqq60w"/><path class="k5gsbk5ud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pie-chart-3-outline"} {...others} />);
}

export default Component;
