import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/ej4rzcb4e.css';
import '../../css/p/pa8fw9lpr.css';
import '../../css/k/kbwz4fv-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhMLTjd1r"><g class="aql7dnt-u"><path class="ej4rzcb4e"/><path class="pa8fw9lpr"/><path class="kbwz4fv-v"/></g></mask></defs><path mask="url(#SVGhMLTjd1r)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:market-analysis"} {...others} />);
}

export default Component;
