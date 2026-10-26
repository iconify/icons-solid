import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h02ds3bnx.css';

const viewBox = {"width":358.28,"height":358.28,"left":0.11,"top":1.86};
const content = `<path clip-rule="evenodd" class="h02ds3bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:spiffe"} {...others} />);
}

export default Component;
