import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ouh28gbcj.css';
import '../../css/i/igzn2xqsy.css';
import '../../css/i/ilwaa5qlq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ouh28gbcj"/><path class="igzn2xqsy"/><path class="ilwaa5qlq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:color-palette"} {...others} />);
}

export default Component;
