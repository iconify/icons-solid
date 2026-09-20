import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fzg7zib3v.css';
import '../../css/b/baq7v_06m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="fzg7zib3v"/><path class="baq7v_06m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:basecamp-logo-1"} {...others} />);
}

export default Component;
