import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hu8s6jbwf.css';
import '../../css/p/pkj8qsbxv.css';
import '../../css/s/s5myckckt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="hu8s6jbwf"/><path class="pkj8qsbxv"/><path class="s5myckckt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:hard-drive-1"} {...others} />);
}

export default Component;
