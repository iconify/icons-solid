import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wyfoo0uth.css';
import '../../css/o/o-wd_ib4v.css';
import '../../css/e/epcj3kewg.css';
import '../../css/z/zn02czbrq.css';
import '../../css/m/m5tkhubbu.css';
import '../../css/d/dwt0wg95a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="wyfoo0uth"/><path class="o-wd_ib4v"/><path class="epcj3kewg"/><path class="zn02czbrq"/><path class="m5tkhubbu"/><path class="dwt0wg95a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:road-sign-both"} {...others} />);
}

export default Component;
