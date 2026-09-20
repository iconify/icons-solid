import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c92owyb9e.css';
import '../../css/z/z2ga-tbvv.css';
import '../../css/m/mc2qtwahl.css';
import '../../css/l/lzce7vbsa.css';
import '../../css/d/dkr4p4beo.css';
import '../../css/g/guqo7kbws.css';
import '../../css/o/ojmo3bccp.css';
import '../../css/x/x_1mf9_xw.css';
import '../../css/h/h7emchdjn.css';

const viewBox = {"width":256,"height":220};
const content = `<path class="c92owyb9e"/><path class="z2ga-tbvv"/><path class="mc2qtwahl"/><path class="lzce7vbsa"/><path class="dkr4p4beo"/><path class="guqo7kbws"/><path class="ojmo3bccp"/><path class="x_1mf9_xw"/><path class="h7emchdjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:redis"} {...others} />);
}

export default Component;
