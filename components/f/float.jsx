import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jci0qhbcw.css';
import '../../css/c/cjzuttbhh.css';
import '../../css/e/eo9hwabpc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGznp2xeZq"><g class="v3_i3wktz"><path class="jci0qhbcw"/><path class="cjzuttbhh"/><path class="eo9hwabpc"/></g></mask></defs><path mask="url(#SVGznp2xeZq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:float"} {...others} />);
}

export default Component;
