import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj_5p1hkz.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="hj_5p1hkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:dribbble-square"} {...others} />);
}

export default Component;
