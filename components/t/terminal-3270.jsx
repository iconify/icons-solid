import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu63veedq.css';
import '../../css/q/qu9ohiqrz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nu63veedq"/><path class="qu9ohiqrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:terminal-3270"} {...others} />);
}

export default Component;
