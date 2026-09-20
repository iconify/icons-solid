import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s02m9kbje.css';
import '../../css/p/pcxgyzb-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s02m9kbje"/><path class="pcxgyzb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:wealth-filled"} {...others} />);
}

export default Component;
