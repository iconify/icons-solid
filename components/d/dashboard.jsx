import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/b/beip37bcn.css';
import '../../css/w/w4fezhbzj.css';
import '../../css/q/qyky4f0vl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="beip37bcn"/><path class="w4fezhbzj"/><path class="qyky4f0vl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dashboard"} {...others} />);
}

export default Component;
