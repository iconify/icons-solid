import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wdlsi5blf.css';
import '../../css/l/lj4c_yoqf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="wdlsi5blf"/><path class="lj4c_yoqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chart-proportion"} {...others} />);
}

export default Component;
