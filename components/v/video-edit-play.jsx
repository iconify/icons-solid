import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvxr7fbch.css';
import '../../css/j/jlcpzc1mg.css';
import '../../css/x/x-x_aeb_o.css';
import '../../css/w/wwjpj7b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvxr7fbch"/><path class="jlcpzc1mg"/><path class="x-x_aeb_o"/><path class="wwjpj7b0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:video-edit-play"} {...others} />);
}

export default Component;
