import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/ymsi6fbor.css';
import '../../css/i/idyp2ss1r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="svgIDa"><g class="aql7dnt-u"><path clip-rule="evenodd" class="ymsi6fbor"/><path class="idyp2ss1r"/></g></mask><path mask="url(#svgIDa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:behance"} {...others} />);
}

export default Component;
