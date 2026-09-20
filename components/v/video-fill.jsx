import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muj7qwivj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="muj7qwivj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:video-fill"} {...others} />);
}

export default Component;
