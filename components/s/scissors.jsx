import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/axw7lr55v.css';
import '../../css/s/sqlr_kgjy.css';
import '../../css/i/inz9m4wmz.css';
import '../../css/d/d741o543y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="axw7lr55v"/><path class="sqlr_kgjy"/><circle class="inz9m4wmz"/><circle class="d741o543y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:scissors"} {...others} />);
}

export default Component;
