import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eiph_s-7m.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="eiph_s-7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:not-equal-sign"} {...others} />);
}

export default Component;
