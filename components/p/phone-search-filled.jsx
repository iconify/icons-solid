import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu5x9bbvk.css';
import '../../css/n/ndj5swlkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tu5x9bbvk"/><path class="ndj5swlkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:phone-search-filled"} {...others} />);
}

export default Component;
