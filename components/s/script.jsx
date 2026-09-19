import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/befny0bst.css';
import '../../css/c/cjm1ouksc.css';
import '../../css/u/ufci-5pkw.css';

const viewBox = {"width":2000,"height":2000};
const content = `<g class="befny0bst"><path class="cjm1ouksc"/><path class="ufci-5pkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:script"} {...others} />);
}

export default Component;
