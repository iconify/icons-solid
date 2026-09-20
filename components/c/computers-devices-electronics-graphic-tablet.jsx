import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgwq21n2c.css';
import '../../css/g/g4las-uut.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lgwq21n2c"/><path class="g4las-uut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-graphic-tablet"} {...others} />);
}

export default Component;
