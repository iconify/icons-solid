import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqqfc0spw.css';

const viewBox = {"width":200,"height":156.7,"left":72.8,"top":468.1};
const content = `<path class="nqqfc0spw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:anb"} {...others} />);
}

export default Component;
