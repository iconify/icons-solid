import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/i/i_ng745sa.css';
import '../../css/u/uisqotb2c.css';
import '../../css/i/i78exuy0q.css';

const viewBox = {"width":41,"height":41,"top":-0.5};
const content = `<g class="umm606kxf"><path class="i_ng745sa"/><path class="uisqotb2c"/><path class="i78exuy0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:mail"} {...others} />);
}

export default Component;
