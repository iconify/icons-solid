import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayqtpboig.css';
import '../../css/v/vhfpguceu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ayqtpboig"/><path class="vhfpguceu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-bold-duotone"} {...others} />);
}

export default Component;
