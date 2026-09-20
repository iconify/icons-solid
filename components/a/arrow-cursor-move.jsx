import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv73z5bfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lv73z5bfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:arrow-cursor-move"} {...others} />);
}

export default Component;
