import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/ynfcuo-wb.css';
import '../../css/e/e_7i-ix1w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGX9MiJeJu"><g class="v3_i3wktz"><path class="ynfcuo-wb"/><path class="e_7i-ix1w"/></g></mask></defs><path mask="url(#SVGX9MiJeJu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:more-app"} {...others} />);
}

export default Component;
