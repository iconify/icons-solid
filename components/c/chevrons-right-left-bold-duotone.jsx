import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/c/cjcrzte3y.css';
import '../../css/q/qmdhvtfgy.css';
import '../../css/b/bkb4aob9x.css';
import '../../css/h/h0homb0yl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="cjcrzte3y"/><path class="qmdhvtfgy"/></g><path class="bkb4aob9x"/><path class="h0homb0yl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-right-left-bold-duotone"} {...others} />);
}

export default Component;
