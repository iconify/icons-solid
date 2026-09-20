import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/llko29bid.css';
import '../../css/a/a9_rmzbze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="llko29bid"/><path class="a9_rmzbze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:html5-alt"} {...others} />);
}

export default Component;
