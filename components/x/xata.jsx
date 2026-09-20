import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2r4mmblp.css';

const viewBox = {"width":134,"height":135};
const content = `<path clip-rule="evenodd" class="k2r4mmblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:xata"} {...others} />);
}

export default Component;
