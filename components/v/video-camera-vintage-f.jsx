import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tym57sy9w.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};
const content = `<path class="tym57sy9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:video-camera-vintage-f"} {...others} />);
}

export default Component;
