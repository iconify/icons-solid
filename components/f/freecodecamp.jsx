import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw4ax2p7p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kw4ax2p7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:freecodecamp"} {...others} />);
}

export default Component;
