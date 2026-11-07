import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6d250bwp.css';
import '../../css/c/cf8jt1bey.css';
import '../../css/j/jt-vrxbga.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j6d250bwp"/><path class="cf8jt1bey"/><path clip-rule="evenodd" class="jt-vrxbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-check-rounded-outline"} {...others} />);
}

export default Component;
