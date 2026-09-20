import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9l55kf3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w9l55kf3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:face-id-1-bold"} {...others} />);
}

export default Component;
