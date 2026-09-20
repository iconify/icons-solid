import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsfig2t_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nsfig2t_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:desktop-1-filled"} {...others} />);
}

export default Component;
