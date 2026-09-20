import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob2cedcgl.css';
import '../../css/k/kzd394b_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ob2cedcgl"/><path class="kzd394b_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-coaching-bait-1"} {...others} />);
}

export default Component;
