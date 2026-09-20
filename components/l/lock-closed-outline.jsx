import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byz9vkb6r.css';
import '../../css/h/h_ma9rt0q.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="byz9vkb6r"/><path class="h_ma9rt0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:lock-closed-outline"} {...others} />);
}

export default Component;
