import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3k-7ccja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y3k-7ccja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:mail-clock"} {...others} />);
}

export default Component;
