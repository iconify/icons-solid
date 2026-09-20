import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpzz9abup.css';
import '../../css/z/znd-kf3wq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpzz9abup"/><path class="znd-kf3wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:controls-slider-toggle-left"} {...others} />);
}

export default Component;
