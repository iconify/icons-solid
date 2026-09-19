import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/l3ki_3bwl.css';
import '../../css/v/vciiyubmr.css';
import '../../css/m/m5tkhubbu.css';
import '../../css/h/hqtfwebra.css';
import '../../css/u/u990qf-pf.css';
import '../../css/l/lzvzg7b2t.css';
import '../../css/c/cwcamf57i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="l3ki_3bwl"/><path class="vciiyubmr"/><path class="m5tkhubbu"/><path class="hqtfwebra"/><path class="u990qf-pf"/><path class="lzvzg7b2t"/><path class="cwcamf57i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:speed-one"} {...others} />);
}

export default Component;
