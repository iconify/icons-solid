import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/je-_wxchd.css';
import '../../css/x/xn48lteja.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="je-_wxchd"/><path class="xn48lteja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:snorkle"} {...others} />);
}

export default Component;
