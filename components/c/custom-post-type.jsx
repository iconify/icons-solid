import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5j5exdpy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j5j5exdpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:custom-post-type"} {...others} />);
}

export default Component;
