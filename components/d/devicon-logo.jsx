import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ekvyacbjk.css';
import '../../css/c/c7xv5mfgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="ekvyacbjk"/><path class="c7xv5mfgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:devicon-logo"} {...others} />);
}

export default Component;
