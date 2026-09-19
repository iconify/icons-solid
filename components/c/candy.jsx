import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/w19zccbwk.css';
import '../../css/b/b8ax9pbxl.css';
import '../../css/x/xzng-4bwi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKv92mcmB"><g class="rohhhzb0l"><circle class="w19zccbwk"/><path class="b8ax9pbxl"/><path class="xzng-4bwi"/></g></mask></defs><path mask="url(#SVGKv92mcmB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:candy"} {...others} />);
}

export default Component;
