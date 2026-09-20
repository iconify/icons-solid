import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3_th3lrr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q3_th3lrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:music-accidental-double-flat"} {...others} />);
}

export default Component;
