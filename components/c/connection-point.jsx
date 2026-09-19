import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/enw8ysjww.css';
import '../../css/a/aou6uxbpc.css';
import '../../css/l/lkb7etlcq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWe0BFeAC"><g class="v3_i3wktz"><path class="enw8ysjww"/><path class="aou6uxbpc"/><path class="lkb7etlcq"/></g></mask></defs><path mask="url(#SVGWe0BFeAC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:connection-point"} {...others} />);
}

export default Component;
