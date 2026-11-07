import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihkre-bnx.css';
import '../../css/v/v7i0-vbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ihkre-bnx"/><path clip-rule="evenodd" class="v7i0-vbmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-outline"} {...others} />);
}

export default Component;
