import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lagukibcz.css';
import '../../css/y/yffxg5ktw.css';
import '../../css/b/bi3s7qmxc.css';
import '../../css/b/buif742pl.css';
import '../../css/z/z_0u9humb.css';
import '../../css/c/cfzsbfbml.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lagukibcz"/><path class="yffxg5ktw"/><path class="bi3s7qmxc"/><path class="buif742pl"/><path class="z_0u9humb"/><path class="cfzsbfbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-two-rounded-bold"} {...others} />);
}

export default Component;
