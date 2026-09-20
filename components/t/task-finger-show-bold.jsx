import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4tv8g50k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4tv8g50k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:task-finger-show-bold"} {...others} />);
}

export default Component;
