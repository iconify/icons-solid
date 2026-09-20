import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqu1uhb_e.css';
import '../../css/b/b0zme1q_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gqu1uhb_e"/><path class="b0zme1q_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:controls-camera-off"} {...others} />);
}

export default Component;
