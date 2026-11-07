import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glv5hj-md.css';
import '../../css/d/d3no_4bwo.css';
import '../../css/c/ctpju6bji.css';
import '../../css/j/jjk_8ebes.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="glv5hj-md"/><path clip-rule="evenodd" class="d3no_4bwo"/><path class="ctpju6bji"/><path class="jjk_8ebes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-smile-square-bold-duotone"} {...others} />);
}

export default Component;
