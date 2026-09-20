import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clfpmnbkh.css';
import '../../css/d/dag1i075l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="clfpmnbkh"/><path class="dag1i075l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:file-add"} {...others} />);
}

export default Component;
