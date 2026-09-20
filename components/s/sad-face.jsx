import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ui9rp7bdv.css';
import '../../css/r/r2th9g7qg.css';
import '../../css/a/a86eqqbry.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ui9rp7bdv"/><path class="r2th9g7qg"/><path class="a86eqqbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:sad-face"} {...others} />);
}

export default Component;
