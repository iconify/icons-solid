import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih1h7z2gg.css';
import '../../css/l/l_7m7z2gc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ih1h7z2gg"/><path class="l_7m7z2gc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:volume-on-fill-20"} {...others} />);
}

export default Component;
