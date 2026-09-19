import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy1kzqb5s.css';
import '../../css/b/bgsh7qxku.css';
import '../../css/k/k4oa-tklo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oy1kzqb5s"/><path class="bgsh7qxku"/><path class="k4oa-tklo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:entering-heaven-alive"} {...others} />);
}

export default Component;
