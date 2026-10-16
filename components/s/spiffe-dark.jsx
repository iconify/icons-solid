import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv9q3ib4j.css';

const viewBox = {"width":358.28,"height":358.28,"left":0.11,"top":1.86};
const content = `<path clip-rule="evenodd" class="rv9q3ib4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:spiffe-dark"} {...others} />);
}

export default Component;
