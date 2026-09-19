import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tuhh6ccor.css';
import '../../css/r/rk_ebkb0f.css';
import '../../css/g/g_wkhkt4o.css';
import '../../css/d/dgzseabdf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tuhh6ccor"/><path class="rk_ebkb0f"/><path class="g_wkhkt4o"/><path class="dgzseabdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-go-lang"} {...others} />);
}

export default Component;
