import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/srgi2oukb.css';
import '../../css/e/e017mbc7v.css';
import '../../css/w/wjaacdb4g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="srgi2oukb"/><path class="e017mbc7v"/><path clip-rule="evenodd" class="wjaacdb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:wheat-flat"} {...others} />);
}

export default Component;
