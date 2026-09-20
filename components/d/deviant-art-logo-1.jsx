import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x-pblibxt.css';
import '../../css/f/f03i904iz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="x-pblibxt"/><path class="f03i904iz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:deviant-art-logo-1"} {...others} />);
}

export default Component;
