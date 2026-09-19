import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/s/skxbyd0je.css';
import '../../css/x/xwtx6kbdr.css';
import '../../css/v/vpeh0xlmp.css';
import '../../css/y/y4xeitprp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="skxbyd0je"/><path class="xwtx6kbdr"/><path class="vpeh0xlmp"/><path class="y4xeitprp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hot-pot-one"} {...others} />);
}

export default Component;
