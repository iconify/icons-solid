import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywc1ct_vq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ywc1ct_vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ai-folder-robot-solid"} {...others} />);
}

export default Component;
