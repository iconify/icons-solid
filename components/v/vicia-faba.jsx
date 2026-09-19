import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/ppofcqzlr.css';
import '../../css/y/yejqf6bhb.css';
import '../../css/m/m_aa5ccfu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmqX4IeiW"><g class="v3_i3wktz"><path class="ppofcqzlr"/><path class="yejqf6bhb"/><path class="m_aa5ccfu"/></g></mask></defs><path mask="url(#SVGmqX4IeiW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:vicia-faba"} {...others} />);
}

export default Component;
