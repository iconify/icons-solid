import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/a/aqezq3b2u.css';
import '../../css/g/go_3kbx3s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVB2dqNmI"><g class="adexpl72i"><path class="aqezq3b2u"/><path clip-rule="evenodd" class="go_3kbx3s"/></g></mask></defs><path mask="url(#SVGVB2dqNmI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:circle-three"} {...others} />);
}

export default Component;
