import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry1vzxbgx.css';
import '../../css/h/hllb8zubv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ry1vzxbgx"/><path class="hllb8zubv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:filter-close-bold"} {...others} />);
}

export default Component;
