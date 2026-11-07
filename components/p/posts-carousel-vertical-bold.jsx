import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcxpyny9b.css';
import '../../css/t/tslomuedm.css';
import '../../css/y/yjypexard.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zcxpyny9b"/><path class="tslomuedm"/><path class="yjypexard"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-vertical-bold"} {...others} />);
}

export default Component;
