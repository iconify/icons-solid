import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utawi2b_n.css';
import '../../css/m/mx3dnrxyf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utawi2b_n"/><path clip-rule="evenodd" class="mx3dnrxyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:label-dollar-2"} {...others} />);
}

export default Component;
