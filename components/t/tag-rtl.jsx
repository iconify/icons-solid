import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn3k_kbtr.css';
import '../../css/s/s13wyyboa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bn3k_kbtr"/><circle class="s13wyyboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:tag-rtl"} {...others} />);
}

export default Component;
