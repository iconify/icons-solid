import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0_97tc8r.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="a0_97tc8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:skull"} {...others} />);
}

export default Component;
