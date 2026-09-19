import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/optxjnmeh.css';
import '../../css/g/gha7d3b_u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtnsVodpN"><g class="v3_i3wktz"><path class="optxjnmeh"/><path class="gha7d3b_u"/></g></mask></defs><path mask="url(#SVGtnsVodpN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:align-left"} {...others} />);
}

export default Component;
