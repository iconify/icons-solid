import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhu29pbch.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jhu29pbch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:globe-alt"} {...others} />);
}

export default Component;
