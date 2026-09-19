import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dgs2tgb2s.css';
import '../../css/y/yn551zh7z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwTJ2KeRQ"><g class="v3_i3wktz"><path class="dgs2tgb2s"/><path class="yn551zh7z"/></g></mask></defs><path mask="url(#SVGwTJ2KeRQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:ungroup"} {...others} />);
}

export default Component;
