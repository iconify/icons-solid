import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/yjb0_8b7z.css';
import '../../css/z/zu_quob4e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCK9oCgcW"><g class="ufeehvblu"><path class="yjb0_8b7z"/><path class="zu_quob4e"/></g></mask></defs><path mask="url(#SVGCK9oCgcW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:water-rate"} {...others} />);
}

export default Component;
