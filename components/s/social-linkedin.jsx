import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5pvelf5c.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="f5pvelf5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-linkedin"} {...others} />);
}

export default Component;
