import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq9_pobzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lq9_pobzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:water-drop-half"} {...others} />);
}

export default Component;
