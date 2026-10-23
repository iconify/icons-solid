import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7_-a7ixx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z7_-a7ixx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:signal"} {...others} />);
}

export default Component;
