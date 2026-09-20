import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6z9ar0tw.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="o6z9ar0tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:travelperk-light"} {...others} />);
}

export default Component;
