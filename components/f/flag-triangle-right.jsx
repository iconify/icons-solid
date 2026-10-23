import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm-xv_9uy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm-xv_9uy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:flag-triangle-right"} {...others} />);
}

export default Component;
