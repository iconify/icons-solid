import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyu-xlb4c.css';
import '../../css/m/m1ot_8bgg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zyu-xlb4c"/><path clip-rule="evenodd" class="m1ot_8bgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bao"} {...others} />);
}

export default Component;
