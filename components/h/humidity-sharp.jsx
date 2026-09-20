import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrtcvsb7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qrtcvsb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:humidity-sharp"} {...others} />);
}

export default Component;
