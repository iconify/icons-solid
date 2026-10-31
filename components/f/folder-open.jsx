import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/iyxjhv93x.css';
import '../../css/f/f3nz4rb0d.css';
import '../../css/j/jdp_3zmek.css';
import '../../css/o/og5jizutc.css';
import '../../css/z/zm7o4ipwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="iyxjhv93x wm-shadow"/><path class="f3nz4rb0d wm-shadow"/><path class="jdp_3zmek"/><path class="og5jizutc"/><path class="zm7o4ipwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:folder-open"} {...others} />);
}

export default Component;
