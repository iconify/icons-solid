import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2-x-cbeh.css';
import '../../css/j/j-2a-nbrj.css';
import '../../css/o/os9vkpw9m.css';
import '../../css/y/yl0s6gb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j2-x-cbeh"/><path class="j-2a-nbrj"/><path class="os9vkpw9m"/><path class="yl0s6gb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-4-bold-duotone"} {...others} />);
}

export default Component;
