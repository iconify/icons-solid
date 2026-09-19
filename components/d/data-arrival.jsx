import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/o3eo20bpg.css';
import '../../css/j/jgkv41b5o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJ1qr9dfU"><g class="v3_i3wktz"><path clip-rule="evenodd" class="o3eo20bpg"/><path class="jgkv41b5o"/></g></mask></defs><path mask="url(#SVGJ1qr9dfU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:data-arrival"} {...others} />);
}

export default Component;
