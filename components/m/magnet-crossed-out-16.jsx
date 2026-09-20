import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-daoi68e.css';
import '../../css/x/xsnnetj5v.css';
import '../../css/o/oul_ikb6j.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="l-daoi68e"/><path class="xsnnetj5v"/><path clip-rule="evenodd" class="oul_ikb6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:magnet-crossed-out-16"} {...others} />);
}

export default Component;
