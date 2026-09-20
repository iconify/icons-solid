import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3t6plt2w.css';
import '../../css/y/yddqsqbhk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="n3t6plt2w"/><path clip-rule="evenodd" class="yddqsqbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:message-no-access-solid"} {...others} />);
}

export default Component;
