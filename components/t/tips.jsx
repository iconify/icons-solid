import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/z/zs52e4mee.css';
import '../../css/z/zl7ny6enc.css';
import '../../css/u/utflk3b0j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="zs52e4mee"/><path class="zl7ny6enc"/><path class="utflk3b0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tips"} {...others} />);
}

export default Component;
