import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh9q3eeas.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zh9q3eeas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:thumb-up-line"} {...others} />);
}

export default Component;
