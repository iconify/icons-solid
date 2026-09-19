import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eesw2yd6v.css';
import '../../css/q/qn7uoso6h.css';
import '../../css/i/ihu4-ccqq.css';
import '../../css/a/ad4glsrpq.css';
import '../../css/h/h-vd9bbiy.css';
import '../../css/p/p515twb6w.css';
import '../../css/y/yg-sk_bhe.css';
import '../../css/r/ra9rvgbyo.css';
import '../../css/t/tdid-uk_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eesw2yd6v"/><circle class="qn7uoso6h"/><circle class="ihu4-ccqq"/><circle class="ad4glsrpq"/><circle class="h-vd9bbiy"/><circle class="p515twb6w"/><circle class="yg-sk_bhe"/><circle class="ra9rvgbyo"/><circle class="tdid-uk_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:brightness-down"} {...others} />);
}

export default Component;
