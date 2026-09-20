import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua73idyup.css';

const viewBox = {"width":52,"height":28};
const content = `<path clip-rule="evenodd" class="ua73idyup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cisco-dark"} {...others} />);
}

export default Component;
