import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu6v7ibol.css';
import '../../css/i/iq2ggzbaw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mu6v7ibol"/><path class="iq2ggzbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:i-in-square-support-wall"} {...others} />);
}

export default Component;
