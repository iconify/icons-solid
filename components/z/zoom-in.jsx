import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im5r2tbma.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="im5r2tbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:zoom-in"} {...others} />);
}

export default Component;
