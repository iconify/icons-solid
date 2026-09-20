import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwpz8ab_c.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="cwpz8ab_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-upright-corner-arrow-up-right-upright-corner"} {...others} />);
}

export default Component;
