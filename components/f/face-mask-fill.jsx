import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqy9p5uoe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqy9p5uoe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:face-mask-fill"} {...others} />);
}

export default Component;
