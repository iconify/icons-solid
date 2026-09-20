import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbeaf3bzp.css';
import '../../css/i/iik-bbx6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jbeaf3bzp"/><path class="iik-bbx6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-plus"} {...others} />);
}

export default Component;
