import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voly0lboc.css';
import '../../css/h/hcopf7b5t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="voly0lboc"/><path class="hcopf7b5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:evsy"} {...others} />);
}

export default Component;
