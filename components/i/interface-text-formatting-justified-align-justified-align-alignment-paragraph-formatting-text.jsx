import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pze_dub6t.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="pze_dub6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-justified-align-justified-align-alignment-paragraph-formatting-text"} {...others} />);
}

export default Component;
