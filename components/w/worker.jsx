import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/d/dy4ahachf.css';
import '../../css/g/g7-kjbbtk.css';
import '../../css/y/ydo6tprvv.css';
import '../../css/a/arzr-hbli.css';
import '../../css/h/hg8_y1bry.css';
import '../../css/c/cz4ujikiv.css';
import '../../css/g/gk27t5blw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="dy4ahachf"/><path class="g7-kjbbtk"/><path class="ydo6tprvv"/><path class="arzr-hbli"/><path class="hg8_y1bry"/><path class="cz4ujikiv"/><path class="gk27t5blw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:worker"} {...others} />);
}

export default Component;
