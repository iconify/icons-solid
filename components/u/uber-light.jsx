import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndtvn8s4t.css';

const viewBox = {"width":926.905,"height":321.777};
const content = `<path class="ndtvn8s4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:uber-light"} {...others} />);
}

export default Component;
