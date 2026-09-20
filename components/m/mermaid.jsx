import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu7p034nk.css';
import '../../css/b/b8kyosqzr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nu7p034nk"/><path class="b8kyosqzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mermaid"} {...others} />);
}

export default Component;
