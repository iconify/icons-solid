import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mm938ojjy.css';
import '../../css/u/u6s_gabnn.css';
import '../../css/g/ghea5cbsp.css';
import '../../css/j/j2m8g8spq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGA1Z3kdCa"><g class="aql7dnt-u"><path class="mm938ojjy"/><path class="u6s_gabnn"/><circle class="ghea5cbsp"/><path class="j2m8g8spq"/></g></mask></defs><path mask="url(#SVGA1Z3kdCa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder"} {...others} />);
}

export default Component;
