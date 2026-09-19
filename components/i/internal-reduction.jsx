import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e0pazubmt.css';
import '../../css/l/l11e97baw.css';
import '../../css/y/ypj-nwmud.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0V39Ubmv"><g class="aql7dnt-u"><path class="e0pazubmt"/><path clip-rule="evenodd" class="l11e97baw"/><path class="ypj-nwmud"/></g></mask></defs><path mask="url(#SVG0V39Ubmv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:internal-reduction"} {...others} />);
}

export default Component;
