import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muf9dmvup.css';
import '../../css/t/ta5vg_czn.css';
import '../../css/x/xbh5ctbef.css';
import '../../css/p/pvabr9frm.css';
import '../../css/b/b5rkaq6ql.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="muf9dmvup"/><path class="ta5vg_czn"/><path class="xbh5ctbef"/><path class="pvabr9frm"/><path class="b5rkaq6ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:terraform-wordmark"} {...others} />);
}

export default Component;
