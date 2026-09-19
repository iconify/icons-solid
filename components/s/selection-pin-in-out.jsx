import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/saex-v3gg.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="saex-v3gg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:selection-pin-in-out"} {...others} />);
}

export default Component;
