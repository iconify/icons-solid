import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v9smevb8x.css';
import '../../css/u/umc_pnb9f.css';
import '../../css/m/m8rmn18in.css';
import '../../css/x/xqto25bur.css';
import '../../css/q/qsdoevb4w.css';
import '../../css/j/jq9xnepui.css';
import '../../css/f/fs1s5sb_z.css';
import '../../css/v/v4wxs7bzx.css';
import '../../css/n/nqhujab-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="v9smevb8x wm-shadow"/><path class="umc_pnb9f wm-s"/><path class="m8rmn18in wm-shadow"/><path class="xqto25bur"/><path class="qsdoevb4w"/><path class="jq9xnepui"/><path class="fs1s5sb_z wm-s"/><path class="v4wxs7bzx wm-s"/><path class="nqhujab-i wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:server-cog"} {...others} />);
}

export default Component;
