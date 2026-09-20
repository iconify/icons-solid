import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdsy7s6qc.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="jdsy7s6qc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ear-speciality-solid"} {...others} />);
}

export default Component;
