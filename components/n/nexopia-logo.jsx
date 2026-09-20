import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kx2q__brx.css';
import '../../css/g/gvn3jbcrn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="kx2q__brx"/><path class="gvn3jbcrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:nexopia-logo"} {...others} />);
}

export default Component;
