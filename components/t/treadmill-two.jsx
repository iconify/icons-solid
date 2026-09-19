import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/ld3j6-bqh.css';
import '../../css/j/j7wrjtoqx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJHL1QdsY"><g class="rohhhzb0l"><path class="ld3j6-bqh"/><rect class="j7wrjtoqx"/></g></mask></defs><path mask="url(#SVGJHL1QdsY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:treadmill-two"} {...others} />);
}

export default Component;
