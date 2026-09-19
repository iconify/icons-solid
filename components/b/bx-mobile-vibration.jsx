import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o69gdcw9k.css';
import '../../css/b/bkyqy-baq.css';
import '../../css/e/e-p0zm_dz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o69gdcw9k"/><circle class="bkyqy-baq"/><path class="e-p0zm_dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-mobile-vibration"} {...others} />);
}

export default Component;
