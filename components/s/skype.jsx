import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w758uv4jk.css';
import '../../css/t/t5r-27-dp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w758uv4jk"/><path class="t5r-27-dp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:skype"} {...others} />);
}

export default Component;
