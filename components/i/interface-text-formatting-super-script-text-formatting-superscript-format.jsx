import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxx48lb0z.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="qxx48lb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-super-script-text-formatting-superscript-format"} {...others} />);
}

export default Component;
