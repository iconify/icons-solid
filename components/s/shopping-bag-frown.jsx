import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zdvvn6psi.css';
import '../../css/m/m7olahbxe.css';
import '../../css/m/m2fgxfk8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="zdvvn6psi"/><path class="m7olahbxe"/><path class="m2fgxfk8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:shopping-bag-frown"} {...others} />);
}

export default Component;
