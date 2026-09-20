import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzoxg7_fp.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="mzoxg7_fp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-indent-increase-alignment-align-indent-paragraph-increase-formatting-text"} {...others} />);
}

export default Component;
