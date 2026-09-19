import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lcee_744z.css';
import '../../css/m/mb-fyjb0d.css';
import '../../css/q/qm1qe08zp.css';
import '../../css/d/dtwjw7ica.css';
import '../../css/a/a9hibnbzd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGl6sGabsw"><g class="aql7dnt-u"><path class="lcee_744z"/><path class="mb-fyjb0d"/><path class="qm1qe08zp"/><path class="dtwjw7ica"/><path class="a9hibnbzd"/></g></mask></defs><path mask="url(#SVGl6sGabsw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:database-first"} {...others} />);
}

export default Component;
