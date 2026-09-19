import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/rsf7yybyf.css';
import '../../css/l/lr31m2bxe.css';
import '../../css/d/dme8em-ey.css';
import '../../css/j/jxvtv---c.css';
import '../../css/q/qaw35bbop.css';
import '../../css/p/p892_0ner.css';
import '../../css/r/rt8e5pi4r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect class="rsf7yybyf"/><rect class="lr31m2bxe"/><rect class="dme8em-ey"/><path class="jxvtv---c"/><path class="qaw35bbop"/><path class="p892_0ner"/><path class="rt8e5pi4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bezier-curve"} {...others} />);
}

export default Component;
