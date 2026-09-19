import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkazs2b4g.css';
import '../../css/r/rms53rbhq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wkazs2b4g"/><path class="rms53rbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:apple"} {...others} />);
}

export default Component;
