import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wctb7iqlf.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="wctb7iqlf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right"} {...others} />);
}

export default Component;
