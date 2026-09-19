import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/udkgazzrc.css';
import '../../css/o/o-hsaebns.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGr33dnebo"><g class="v3_i3wktz"><path class="udkgazzrc"/><path class="o-hsaebns"/></g></mask></defs><path mask="url(#SVGr33dnebo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:high-light"} {...others} />);
}

export default Component;
