import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0g57sbgl.css';
import '../../css/g/g0yfh-zme.css';
import '../../css/n/nr74rxbpq.css';
import '../../css/c/c_81b1fjj.css';
import '../../css/p/p5r2btsdm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z0g57sbgl"/><path class="g0yfh-zme"/><path clip-rule="evenodd" class="nr74rxbpq"/><path class="c_81b1fjj"/><path clip-rule="evenodd" class="p5r2btsdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:sofa-flat"} {...others} />);
}

export default Component;
