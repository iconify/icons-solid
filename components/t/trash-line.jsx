import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df_i2ghzy.css';
import '../../css/h/hjx6v9w2g.css';
import '../../css/w/wdf7q6bld.css';
import '../../css/m/myyjnnbwn.css';
import '../../css/t/t8dxy78qr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 df_i2ghzy"/><path class="clr-i-outline clr-i-outline-path-2 hjx6v9w2g"/><path class="clr-i-outline clr-i-outline-path-3 wdf7q6bld"/><path class="clr-i-outline clr-i-outline-path-4 myyjnnbwn"/><path class="clr-i-outline clr-i-outline-path-5 t8dxy78qr"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:trash-line"} {...others} />);
}

export default Component;
