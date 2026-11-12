import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rovxql1_a.css';
import '../../css/j/jtixhvb7w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rovxql1_a"/><path class="jtixhvb7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chatwoot"} {...others} />);
}

export default Component;
