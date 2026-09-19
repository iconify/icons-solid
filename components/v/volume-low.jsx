import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftiz-zzun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ftiz-zzun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:volume-low"} {...others} />);
}

export default Component;
