import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m3n0xtb4j.css';
import '../../css/r/r2th9g7qg.css';
import '../../css/e/ec-ooxbad.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="m3n0xtb4j"/><path class="r2th9g7qg"/><path class="ec-ooxbad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:binance-circle"} {...others} />);
}

export default Component;
