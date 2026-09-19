import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/z/zdhb83szs.css';
import '../../css/r/rpsd5vp5o.css';
import '../../css/r/rsvuxndka.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKpq6fc5u"><g class="ufeehvblu"><path class="zdhb83szs"/><path class="rpsd5vp5o"/><path class="rsvuxndka"/></g></mask></defs><path mask="url(#SVGKpq6fc5u)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:local"} {...others} />);
}

export default Component;
