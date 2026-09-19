import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5ss79pzi.css';
import '../../css/z/znsgree8n.css';
import '../../css/x/xceiv6bnm.css';
import '../../css/y/y00xw2byu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="u5ss79pzi"/><path class="znsgree8n"/><path clip-rule="evenodd" class="xceiv6bnm"/><path class="y00xw2byu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:circle-four-line"} {...others} />);
}

export default Component;
