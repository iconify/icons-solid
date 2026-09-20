import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9i8s8b5m.css';
import '../../css/c/cnrycxz2k.css';
import '../../css/v/vsni_ovzf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="k9i8s8b5m"/><path clip-rule="evenodd" class="cnrycxz2k"/><path class="vsni_ovzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:store-1-flat"} {...others} />);
}

export default Component;
