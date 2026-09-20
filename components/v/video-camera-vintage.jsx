import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3fetkbua.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};
const content = `<path class="l3fetkbua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:video-camera-vintage"} {...others} />);
}

export default Component;
