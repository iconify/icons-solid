import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdmk0nb5w.css';
import '../../css/l/loieh1tve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gdmk0nb5w"/><path class="loieh1tve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:read-email-at-1-bold"} {...others} />);
}

export default Component;
