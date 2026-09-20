import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mu98i2b4w.css';
import '../../css/p/pe5n98fko.css';
import '../../css/b/bf25np2kj.css';
import '../../css/o/orx8v0b-w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mu98i2b4w"/><path class="pe5n98fko"/><path class="bf25np2kj"/><path clip-rule="evenodd" class="orx8v0b-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:tag-alt-flat"} {...others} />);
}

export default Component;
