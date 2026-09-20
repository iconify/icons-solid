import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6jf5i8lt.css';
import '../../css/o/onai0hbgf.css';
import '../../css/f/fhkp6pb-d.css';
import '../../css/d/d1t81bbbj.css';
import '../../css/z/zjn17yhjb.css';
import '../../css/o/o_53r-k7v.css';
import '../../css/f/fbjvyv36a.css';
import '../../css/v/vu3-3ebnc.css';
import '../../css/g/gtif8-b2c.css';
import '../../css/x/xy-6gcc2w.css';
import '../../css/z/zernfqiqv.css';
import '../../css/c/chlz-bu-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d6jf5i8lt"/><path class="onai0hbgf"/><path class="fhkp6pb-d"/><path class="d1t81bbbj"/><path class="zjn17yhjb"/><path class="o_53r-k7v"/><path class="fbjvyv36a"/><path class="vu3-3ebnc"/><path class="gtif8-b2c"/><path class="xy-6gcc2w"/><path class="zernfqiqv"/><path class="chlz-bu-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:martial-arts-helmet"} {...others} />);
}

export default Component;
