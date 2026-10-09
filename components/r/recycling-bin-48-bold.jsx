import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg50c1boz.css';
import '../../css/h/h2mc0zwiz.css';
import '../../css/j/jifmdiwzm.css';
import '../../css/r/rcczl042f.css';
import '../../css/e/e88_ysu2u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zg50c1boz"/><path class="h2mc0zwiz"/><path class="jifmdiwzm"/><path class="rcczl042f"/><path class="e88_ysu2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:recycling-bin-48-bold"} {...others} />);
}

export default Component;
