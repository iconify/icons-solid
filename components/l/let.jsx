import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cikj799ze.css';
import '../../css/j/ji6cdtapd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cikj799ze"/><path clip-rule="evenodd" class="ji6cdtapd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:let"} {...others} />);
}

export default Component;
