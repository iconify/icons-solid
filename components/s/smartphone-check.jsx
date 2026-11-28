import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs6me8b2a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hs6me8b2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:smartphone-check"} {...others} />);
}

export default Component;
