import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kf9iljxev.css';
import '../../css/i/iog5bvc2b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDiIGbbnD"><g class="v3_i3wktz"><rect class="kf9iljxev"/><path class="iog5bvc2b"/></g></mask></defs><path mask="url(#SVGDiIGbbnD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:box"} {...others} />);
}

export default Component;
