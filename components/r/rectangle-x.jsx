import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/ye8ewzq1l.css';
import '../../css/z/ze8hslbqf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSVFBbdlk"><g class="v3_i3wktz"><path class="ye8ewzq1l"/><path class="ze8hslbqf"/></g></mask></defs><path mask="url(#SVGSVFBbdlk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rectangle-x"} {...others} />);
}

export default Component;
