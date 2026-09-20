import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x4ndzjbct.css';
import '../../css/j/jluxbs0ob.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="x4ndzjbct"/><path class="jluxbs0ob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:play-list-6"} {...others} />);
}

export default Component;
