import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irfjh1x1u.css';
import '../../css/y/y0k_xop1b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="irfjh1x1u"/><path class="y0k_xop1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:picture"} {...others} />);
}

export default Component;
