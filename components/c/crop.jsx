import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jnbn-db6q.css';
import '../../css/e/e3ygp-bfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jnbn-db6q"/><path class="e3ygp-bfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:crop"} {...others} />);
}

export default Component;
