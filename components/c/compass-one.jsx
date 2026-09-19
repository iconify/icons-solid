import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tbyf68bpo.css';
import '../../css/c/cjud57b0f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="tbyf68bpo"/><path class="cjud57b0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:compass-one"} {...others} />);
}

export default Component;
