import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gct10wbbm.css';
import '../../css/z/ztxoju9gq.css';
import '../../css/p/pezqc0bao.css';
import '../../css/g/gdl-8huxq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="gct10wbbm"/><path clip-rule="evenodd" class="ztxoju9gq"/><path class="pezqc0bao"/><path class="gdl-8huxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:gift-flat"} {...others} />);
}

export default Component;
