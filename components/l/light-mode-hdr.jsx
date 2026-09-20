import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nizg78b-v.css';
import '../../css/v/v_2whfbbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nizg78b-v"/><path class="v_2whfbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:light-mode-hdr"} {...others} />);
}

export default Component;
