import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvarblb7n.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="fvarblb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ppe-face-mask"} {...others} />);
}

export default Component;
