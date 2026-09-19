import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jf_oqebhz.css';
import '../../css/b/blolb0gsq.css';
import '../../css/y/ysq10ibdq.css';
import '../../css/g/g-va_qbsd.css';
import '../../css/p/pm4umnbse.css';
import '../../css/y/ym3oes85i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZXOSEdrH"><g class="ufeehvblu"><path class="jf_oqebhz"/><path class="blolb0gsq"/><path class="ysq10ibdq"/><path class="g-va_qbsd"/><path class="pm4umnbse"/><path class="ym3oes85i"/></g></mask></defs><path mask="url(#SVGZXOSEdrH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:coordinate-system"} {...others} />);
}

export default Component;
