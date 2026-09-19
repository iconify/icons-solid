import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/f/fr-v094-v.css';
import '../../css/y/y0dxaabis.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGpUOhc6T"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="fr-v094-v"/><path class="y0dxaabis"/></g></mask></defs><path mask="url(#SVGGpUOhc6T)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:figma"} {...others} />);
}

export default Component;
