import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmd2tzwfv.css';
import '../../css/c/c_tiz1b-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kmd2tzwfv"/><path clip-rule="evenodd" class="c_tiz1b-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-round-bold"} {...others} />);
}

export default Component;
