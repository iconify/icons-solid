import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kio30xvjz.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="kio30xvjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:at-sign"} {...others} />);
}

export default Component;
