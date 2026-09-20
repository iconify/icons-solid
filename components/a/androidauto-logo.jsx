import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/twh8fsbtt.css';
import '../../css/x/xu580sl9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="twh8fsbtt"/><path class="xu580sl9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:androidauto-logo"} {...others} />);
}

export default Component;
