import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0fbj7bwv.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="x0fbj7bwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:pilcrow"} {...others} />);
}

export default Component;
