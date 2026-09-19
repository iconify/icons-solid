import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra46yxsdn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ra46yxsdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shape-intersect-alt-filled"} {...others} />);
}

export default Component;
