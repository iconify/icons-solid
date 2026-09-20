import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ortm4mvgl.css';

const viewBox = {"width":175.748,"height":105.761};
const content = `<path clip-rule="evenodd" class="ortm4mvgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:air-algerie"} {...others} />);
}

export default Component;
