import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyd8q7b-w.css';
import '../../css/x/x4db5135n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dyd8q7b-w"/><path class="x4db5135n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:play-forward-duotone"} {...others} />);
}

export default Component;
