import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egk1a_o_x.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="egk1a_o_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:browser-remove"} {...others} />);
}

export default Component;
