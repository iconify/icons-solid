import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb5p6obzi.css';
import '../../css/o/ow-wen-ya.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sb5p6obzi"/><path class="ow-wen-ya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:time-daily-1-bold"} {...others} />);
}

export default Component;
