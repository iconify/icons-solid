import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ye1j_vbjm.css';
import '../../css/w/w09m8o5ri.css';
import '../../css/i/iokyf-bir.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ye1j_vbjm"/><path class="w09m8o5ri"/><path class="iokyf-bir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:color-swatches"} {...others} />);
}

export default Component;
