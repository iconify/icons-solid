import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etji4rahb.css';
import '../../css/r/ru21yg98i.css';
import '../../css/j/j7rfvrv2c.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="etji4rahb"/><path class="ru21yg98i"/><path class="j7rfvrv2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:openshift"} {...others} />);
}

export default Component;
