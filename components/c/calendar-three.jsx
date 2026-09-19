import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j8__cxbvk.css';
import '../../css/x/xhe8el-mx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGl9BRebGy"><g class="aql7dnt-u"><rect class="j8__cxbvk"/><path class="xhe8el-mx"/></g></mask></defs><path mask="url(#SVGl9BRebGy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:calendar-three"} {...others} />);
}

export default Component;
