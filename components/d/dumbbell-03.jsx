import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juyn0yznl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="juyn0yznl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dumbbell-03"} {...others} />);
}

export default Component;
