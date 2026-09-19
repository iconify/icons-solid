import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0d8ap3yf.css';

const viewBox = {"width":1184,"height":2048};
const content = `<path class="p0d8ap3yf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:pregnant"} {...others} />);
}

export default Component;
