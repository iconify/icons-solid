import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clusz_b3e.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="clusz_b3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bar-chart-26"} {...others} />);
}

export default Component;
