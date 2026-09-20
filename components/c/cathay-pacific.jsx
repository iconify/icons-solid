import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrwqzibld.css';

const viewBox = {"width":26.458,"height":3.704};
const content = `<path class="yrwqzibld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cathay-pacific"} {...others} />);
}

export default Component;
