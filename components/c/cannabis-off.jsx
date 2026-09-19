import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjxz6jo1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tjxz6jo1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cannabis-off"} {...others} />);
}

export default Component;
