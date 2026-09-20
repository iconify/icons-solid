import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5tuxwbnk.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="j5tuxwbnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:image-flash-2-flash-power-connect-charge-electricity-lightning"} {...others} />);
}

export default Component;
