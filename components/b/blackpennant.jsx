import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifivasbnp.css';
import '../../css/p/ptb97odfw.css';
import '../../css/d/dmmpmib0w.css';
import '../../css/y/yr6a_mbii.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ifivasbnp"/><path class="ptb97odfw"/><path class="dmmpmib0w"/><path class="yr6a_mbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackpennant"} {...others} />);
}

export default Component;
