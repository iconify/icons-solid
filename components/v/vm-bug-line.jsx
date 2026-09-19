import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fovsdldng.css';
import '../../css/n/nt694ol2t.css';
import '../../css/s/sx-8igbvo.css';

const viewBox = {"width":36,"height":36};
const content = `<rect class="fovsdldng"/><path class="nt694ol2t"/><path class="sx-8igbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:vm-bug-line"} {...others} />);
}

export default Component;
