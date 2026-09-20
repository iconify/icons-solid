import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg_r_uvrh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wg_r_uvrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:download"} {...others} />);
}

export default Component;
