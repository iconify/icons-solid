import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa9u4gmpw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qa9u4gmpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:cable-car-clock"} {...others} />);
}

export default Component;
