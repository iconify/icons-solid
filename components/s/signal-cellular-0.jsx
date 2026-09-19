import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfxt7ubbp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hfxt7ubbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:signal-cellular-0"} {...others} />);
}

export default Component;
