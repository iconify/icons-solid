import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shvum10dz.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="shvum10dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:lunar-eclipse"} {...others} />);
}

export default Component;
