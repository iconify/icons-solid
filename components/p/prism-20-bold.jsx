import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbmfgacnw.css';
import '../../css/d/d90ivtb7s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wbmfgacnw"/><path class="d90ivtb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:prism-20-bold"} {...others} />);
}

export default Component;
