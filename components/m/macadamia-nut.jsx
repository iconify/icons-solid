import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mt4remb0w.css';
import '../../css/r/r22h40bsk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8qpNQeJl"><g class="aql7dnt-u"><path class="mt4remb0w"/><path class="r22h40bsk"/></g></mask></defs><path mask="url(#SVG8qpNQeJl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:macadamia-nut"} {...others} />);
}

export default Component;
