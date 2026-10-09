import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hehatfcph.css';
import '../../css/a/ayea-y_zd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hehatfcph"/><path class="ayea-y_zd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-left-20"} {...others} />);
}

export default Component;
