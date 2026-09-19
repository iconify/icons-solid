import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8m7stbtj.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="h8m7stbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:medical-sample-negative"} {...others} />);
}

export default Component;
