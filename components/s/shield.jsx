import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_ds3ebdl.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="v_ds3ebdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:shield"} {...others} />);
}

export default Component;
