import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at2p-abdg.css';

const viewBox = {"width":544,"height":512};
const content = `<path class="at2p-abdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:highlighter"} {...others} />);
}

export default Component;
