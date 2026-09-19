import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lfaqxlbsl.css';
import '../../css/m/mxqp5wvsi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgnWzveXa"><g class="aql7dnt-u"><path class="lfaqxlbsl"/><path class="mxqp5wvsi"/></g></mask></defs><path mask="url(#SVGgnWzveXa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:escalators"} {...others} />);
}

export default Component;
