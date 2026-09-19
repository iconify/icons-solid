import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/o/olsnk6fpy.css';
import '../../css/z/z9wgtxbsj.css';
import '../../css/f/fpixpmx3x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="olsnk6fpy"/><path class="z9wgtxbsj"/><path class="fpixpmx3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:reload"} {...others} />);
}

export default Component;
