import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzuu4u4mo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pzuu4u4mo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:calendar-heart-filled"} {...others} />);
}

export default Component;
