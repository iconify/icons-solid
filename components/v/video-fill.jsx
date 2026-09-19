import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sddj92-ex.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sddj92-ex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:video-fill"} {...others} />);
}

export default Component;
