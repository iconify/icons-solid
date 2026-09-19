import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nv1deiyek.css';
import '../../css/i/ize_60byj.css';
import '../../css/s/sdi-3nxzy.css';
import '../../css/i/ic3_zeboh.css';
import '../../css/v/vycq1kbnv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="nv1deiyek"/><path class="ize_60byj"/><path class="sdi-3nxzy"/><path class="ic3_zeboh"/><path class="vycq1kbnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:direction"} {...others} />);
}

export default Component;
