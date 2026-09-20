import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p8y04bble.css';
import '../../css/r/r6wv0301c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="p8y04bble"/><path class="r6wv0301c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:desktop-check"} {...others} />);
}

export default Component;
