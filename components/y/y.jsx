import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3_h01beb.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="r3_h01beb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:y"} {...others} />);
}

export default Component;
