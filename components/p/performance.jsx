import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pbcpcobla.css';
import '../../css/k/kj7rbbbvu.css';
import '../../css/w/wv-togb4q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGn3njyxva"><g class="v3_i3wktz"><path class="pbcpcobla"/><path class="kj7rbbbvu"/><path class="wv-togb4q"/></g></mask></defs><path mask="url(#SVGn3njyxva)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:performance"} {...others} />);
}

export default Component;
