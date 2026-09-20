import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hgpq-7btk.css';
import '../../css/c/catgbiu0b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="hgpq-7btk"/><path class="catgbiu0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:iris-scan"} {...others} />);
}

export default Component;
