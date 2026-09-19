import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln_xg1opz.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ln_xg1opz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:pois-o"} {...others} />);
}

export default Component;
