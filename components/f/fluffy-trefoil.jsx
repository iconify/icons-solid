import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hal55f1hv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hal55f1hv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:fluffy-trefoil"} {...others} />);
}

export default Component;
