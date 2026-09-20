import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0s4wmb5a.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="d0s4wmb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:v0-light"} {...others} />);
}

export default Component;
