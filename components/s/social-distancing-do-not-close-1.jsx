import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v3sj5xh4o.css';
import '../../css/s/sc6t3k8wf.css';
import '../../css/h/h58nbxbdd.css';

const viewBox = {"width":24,"height":25};
const content = `<g class="hntgybcog"><path class="v3sj5xh4o"/><path class="sc6t3k8wf"/><path class="h58nbxbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-do-not-close-1"} {...others} />);
}

export default Component;
