import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pehby3vco.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pehby3vco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:globe-europe-africa"} {...others} />);
}

export default Component;
