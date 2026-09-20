import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h07tfzb-c.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="h07tfzb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:bluetooth-disabled"} {...others} />);
}

export default Component;
