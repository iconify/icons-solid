import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-xm_j6rv.css';

const viewBox = {"width":2048,"height":1792};
const content = `<path class="q-xm_j6rv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:hand-lizard-o"} {...others} />);
}

export default Component;
