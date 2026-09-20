import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e17p_vdgz.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="e17p_vdgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-text-strike-through-text-strike-through-formatting-format"} {...others} />);
}

export default Component;
