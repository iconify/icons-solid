import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz18_1bea.css';
import '../../css/p/p49d8zb-f.css';
import '../../css/v/v3z8t2bgq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yz18_1bea"/><path class="p49d8zb-f"/><path class="v3z8t2bgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:app-window-wireless-problem"} {...others} />);
}

export default Component;
