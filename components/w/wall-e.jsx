import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i584vobxs.css';
import '../../css/g/gt428sznn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="i584vobxs"/><path class="gt428sznn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:wall-e"} {...others} />);
}

export default Component;
