import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f849z9lwr.css';
import '../../css/t/tii820b4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f849z9lwr"/><path clip-rule="evenodd" class="tii820b4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sort-time-desc-24"} {...others} />);
}

export default Component;
