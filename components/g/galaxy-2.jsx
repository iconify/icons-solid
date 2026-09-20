import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x6tal9wly.css';
import '../../css/v/v7a8zqw0m.css';
import '../../css/v/v8oczjbbx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="x6tal9wly"/><path class="v7a8zqw0m"/><path class="v8oczjbbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:galaxy-2"} {...others} />);
}

export default Component;
