import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phsuvkn8h.css';
import '../../css/x/xglk9bcox.css';
import '../../css/k/k_haes9zn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="phsuvkn8h"/><path class="xglk9bcox"/><path clip-rule="evenodd" class="k_haes9zn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:creative-commons-outline"} {...others} />);
}

export default Component;
