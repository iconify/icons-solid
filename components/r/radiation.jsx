import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/c99a-bcfx.css';
import '../../css/p/pkuhgl9dt.css';
import '../../css/v/vwwmmobgf.css';
import '../../css/n/njdyyibcz.css';
import '../../css/d/drcfy7bgd.css';
import '../../css/k/k5_fqf2ju.css';
import '../../css/i/ijuaqcc_z.css';
import '../../css/b/bj8wfdcpj.css';
import '../../css/d/d9vh3v9jy.css';
import '../../css/d/d_m0p-b7x.css';
import '../../css/z/zr4n6r14b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="c99a-bcfx"/><path class="pkuhgl9dt"/><path class="vwwmmobgf"/><path class="njdyyibcz"/><path class="drcfy7bgd"/><path class="k5_fqf2ju"/><path class="ijuaqcc_z"/><path class="bj8wfdcpj"/><path class="d9vh3v9jy"/><path class="d_m0p-b7x"/><path class="zr4n6r14b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:radiation"} {...others} />);
}

export default Component;
