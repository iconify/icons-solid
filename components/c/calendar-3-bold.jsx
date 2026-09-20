import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3_-5u1bi.css';
import '../../css/s/sb5p6obzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f3_-5u1bi"/><path class="sb5p6obzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:calendar-3-bold"} {...others} />);
}

export default Component;
