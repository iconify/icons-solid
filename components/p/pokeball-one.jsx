import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yash702mt.css';
import '../../css/c/ch5cypb2m.css';
import '../../css/f/fwvm8vsks.css';
import '../../css/a/a3sssbc_k.css';
import '../../css/p/povs420wf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yash702mt"/><circle class="ch5cypb2m"/><path class="fwvm8vsks"/><path class="a3sssbc_k"/><circle class="povs420wf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pokeball-one"} {...others} />);
}

export default Component;
