import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atr8lybzg.css';
import '../../css/q/qbrel2bfe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atr8lybzg"/><path class="qbrel2bfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-man-focus-bold"} {...others} />);
}

export default Component;
