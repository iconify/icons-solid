import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/q/qqo-x0bxg.css';
import '../../css/s/st9lwgxpb.css';
import '../../css/b/bt-agubjg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="xhdah4bbl"/><path class="qqo-x0bxg"/><path class="st9lwgxpb"/><path class="bt-agubjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:f-two-key"} {...others} />);
}

export default Component;
