import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/csnmmub7m.css';
import '../../css/u/uxmxvrx8u.css';
import '../../css/m/m-bnfxb5e.css';
import '../../css/w/wnkenz_na.css';
import '../../css/g/gnm47707x.css';
import '../../css/b/b_j8tm8fs.css';
import '../../css/k/kqqvhf0eu.css';
import '../../css/h/hultddvfi.css';
import '../../css/y/yyctq7v0z.css';
import '../../css/c/cob66zo7m.css';
import '../../css/j/jmgkzw-gx.css';
import '../../css/k/k3yc9jbkx.css';
import '../../css/d/djkwkfb5m.css';
import '../../css/x/xsrtqsbqo.css';
import '../../css/b/bz4cpsy8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="csnmmub7m wm-shadow"/><path class="uxmxvrx8u wm-k"/><path class="m-bnfxb5e wm-k"/><path class="wm-k wnkenz_na"/><path class="gnm47707x wm-k"/><path class="b_j8tm8fs wm-k"/><path class="kqqvhf0eu wm-shine"/><path class="hultddvfi wm-a"/><path class="wm-a yyctq7v0z"/><path class="cob66zo7m wm-a"/><path class="jmgkzw-gx wm-a"/><path class="k3yc9jbkx wm-a"/><path class="djkwkfb5m wm-a"/><path class="wm-a xsrtqsbqo"/><path class="bz4cpsy8i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:message-circle-question"} {...others} />);
}

export default Component;
