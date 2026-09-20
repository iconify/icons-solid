import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5doxbc5p.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="n5doxbc5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-indent-decrease-text-alignment-indent-paragraph-align-formatting-decrease"} {...others} />);
}

export default Component;
