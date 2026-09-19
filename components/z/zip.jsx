import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/x26h1bcsq.css';
import '../../css/k/krktdhbhc.css';
import '../../css/p/p49jg_bkb.css';
import '../../css/k/kbzffqb0y.css';
import '../../css/t/tyj92tbdu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="x26h1bcsq"/><path class="krktdhbhc"/><path clip-rule="evenodd" class="p49jg_bkb"/><path class="kbzffqb0y"/><path class="tyj92tbdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:zip"} {...others} />);
}

export default Component;
