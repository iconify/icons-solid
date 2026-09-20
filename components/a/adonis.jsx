import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5s0_hb8t.css';

const viewBox = {"width":180,"height":180};
const content = `<path paint-order="fill markers stroke" class="l5s0_hb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:adonis"} {...others} />);
}

export default Component;
