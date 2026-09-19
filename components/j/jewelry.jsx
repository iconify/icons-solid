import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mzszod_2j.css';
import '../../css/p/p5_dofibb.css';
import '../../css/p/p7hn-sb3e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBoBbid3e"><g class="s9cl3zbei"><circle class="mzszod_2j"/><path class="p5_dofibb"/><path class="p7hn-sb3e"/></g></mask></defs><path mask="url(#SVGBoBbid3e)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:jewelry"} {...others} />);
}

export default Component;
