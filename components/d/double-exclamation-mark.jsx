import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdg_7bcei.css';
import '../../css/s/s57k6-ccf.css';
import '../../css/r/rdu0xlb_k.css';
import '../../css/b/bly1w9oyz.css';
import '../../css/s/ss3qczv0i.css';
import '../../css/c/ci4nj5brr.css';
import '../../css/z/z8bml5v9a.css';
import '../../css/f/fxd_3zb4q.css';
import '../../css/u/ubkcjibmx.css';
import '../../css/n/ny59shbhy.css';
import '../../css/e/eroulfb7y.css';
import '../../css/j/j-oyk8b0g.css';
import '../../css/s/sc2wjeb3i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vdg_7bcei"/><path class="s57k6-ccf"/><path class="rdu0xlb_k"/><path class="bly1w9oyz"/><path class="ss3qczv0i"/><path class="ci4nj5brr"/><path class="z8bml5v9a"/><path class="fxd_3zb4q"/><path class="ubkcjibmx"/><path class="ny59shbhy"/><path class="eroulfb7y"/><path class="j-oyk8b0g"/><path class="sc2wjeb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:double-exclamation-mark"} {...others} />);
}

export default Component;
