import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8p_gac5p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p8p_gac5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:control-value-bar"} {...others} />);
}

export default Component;
