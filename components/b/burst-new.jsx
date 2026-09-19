import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2dz3rb0u.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="h2dz3rb0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:burst-new"} {...others} />);
}

export default Component;
