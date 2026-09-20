import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg-wwst4a.css';
import '../../css/b/b7vvgfbct.css';
import '../../css/m/m3ntttbnn.css';
import '../../css/m/mdc-_dw8k.css';
import '../../css/t/ty-3yxbsn.css';
import '../../css/g/gr3ri6aie.css';
import '../../css/v/v_by-ubey.css';
import '../../css/p/p6kourbsh.css';
import '../../css/a/abp9uub4k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rg-wwst4a"/><path class="b7vvgfbct"/><path class="m3ntttbnn"/><path class="mdc-_dw8k"/><path class="ty-3yxbsn"/><circle class="gr3ri6aie"/><circle class="v_by-ubey"/><path class="p6kourbsh"/><path class="abp9uub4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:front-facing-baby-chick"} {...others} />);
}

export default Component;
