import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uujxc3myq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uujxc3myq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hot-air-balloon-remix"} {...others} />);
}

export default Component;
