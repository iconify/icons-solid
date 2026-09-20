import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0fllk4ad.css';
import '../../css/c/cxk3kabmy.css';
import '../../css/v/vjworcc_g.css';
import '../../css/o/oe2gcyxor.css';
import '../../css/a/adaywebch.css';
import '../../css/z/z3h23rs6t.css';
import '../../css/z/z_ii7tb9m.css';
import '../../css/g/ggj4lwl8c.css';
import '../../css/z/zh5sszxjq.css';
import '../../css/t/tcc-ysbdk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y0fllk4ad"/><path class="cxk3kabmy"/><path class="vjworcc_g"/><path class="oe2gcyxor"/><path class="adaywebch"/><path class="z3h23rs6t"/><path class="z_ii7tb9m"/><path class="ggj4lwl8c"/><path class="zh5sszxjq"/><path class="tcc-ysbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:winking-face"} {...others} />);
}

export default Component;
