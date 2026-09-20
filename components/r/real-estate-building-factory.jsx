import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t02gsl99c.css';
import '../../css/i/ipce-91ks.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t02gsl99c"/><path class="ipce-91ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:real-estate-building-factory"} {...others} />);
}

export default Component;
