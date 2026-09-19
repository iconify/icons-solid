import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb37wj2kt.css';
import '../../css/k/k8xftibiq.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="cb37wj2kt"/><path class="k8xftibiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:statistic-map"} {...others} />);
}

export default Component;
