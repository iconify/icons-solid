import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/r-jxe9bpv.css';
import '../../css/o/omnpcg9gc.css';
import '../../css/z/zjbgnh96p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgFAqpCEZ"><g class="v3_i3wktz"><path class="r-jxe9bpv"/><path class="omnpcg9gc"/><path class="zjbgnh96p"/></g></mask></defs><path mask="url(#SVGgFAqpCEZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:invert-camera"} {...others} />);
}

export default Component;
