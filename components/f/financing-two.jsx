import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/issgrdd1r.css';
import '../../css/y/ytgl6lbch.css';
import '../../css/t/tvonebcsg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWXB5Hr4t"><g class="rohhhzb0l"><path class="issgrdd1r"/><rect class="ytgl6lbch"/><path class="tvonebcsg"/></g></mask></defs><path mask="url(#SVGWXB5Hr4t)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:financing-two"} {...others} />);
}

export default Component;
