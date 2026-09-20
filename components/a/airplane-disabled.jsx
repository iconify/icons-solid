import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/y/yq7arhh0q.css';
import '../../css/o/o101-2bhf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="yq7arhh0q"/><path class="o101-2bhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:airplane-disabled"} {...others} />);
}

export default Component;
