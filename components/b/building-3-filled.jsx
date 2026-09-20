import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j80ujrauk.css';
import '../../css/q/qsvb7nb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j80ujrauk"/><path class="qsvb7nb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:building-3-filled"} {...others} />);
}

export default Component;
