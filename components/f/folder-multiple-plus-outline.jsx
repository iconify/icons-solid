import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmw2i_yzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tmw2i_yzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:folder-multiple-plus-outline"} {...others} />);
}

export default Component;
