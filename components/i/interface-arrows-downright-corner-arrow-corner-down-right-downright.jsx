import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0ce-xmes.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="x0ce-xmes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-downright-corner-arrow-corner-down-right-downright"} {...others} />);
}

export default Component;
