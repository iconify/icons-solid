import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezodczb5s.css';
import '../../css/s/s4hxl1lwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ezodczb5s"/><path clip-rule="evenodd" class="s4hxl1lwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:adobe-indesign-solid"} {...others} />);
}

export default Component;
