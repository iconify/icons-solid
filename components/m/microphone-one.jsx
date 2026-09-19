import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/zx9s-4b6r.css';
import '../../css/c/cplpj-rbo.css';
import '../../css/i/icfu2xbdv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="zx9s-4b6r"/><circle class="cplpj-rbo"/><path class="icfu2xbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:microphone-one"} {...others} />);
}

export default Component;
