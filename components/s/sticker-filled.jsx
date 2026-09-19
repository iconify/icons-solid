import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp9t_v64j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bp9t_v64j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:sticker-filled"} {...others} />);
}

export default Component;
