import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njjw8aczg.css';
import '../../css/v/vo_ontb6g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="njjw8aczg"/><path class="vo_ontb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-zoom"} {...others} />);
}

export default Component;
