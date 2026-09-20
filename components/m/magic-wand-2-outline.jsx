import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lphdqt_3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lphdqt_3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-wand-2-outline"} {...others} />);
}

export default Component;
