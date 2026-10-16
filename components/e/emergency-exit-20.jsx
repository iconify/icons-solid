import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghoo0wryx.css';
import '../../css/a/a7p7lmknu.css';
import '../../css/i/iipwn-b9p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ghoo0wryx"/><path class="a7p7lmknu"/><path class="iipwn-b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:emergency-exit-20"} {...others} />);
}

export default Component;
