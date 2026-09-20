import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo_oyybjs.css';
import '../../css/z/zlb7djbvf.css';
import '../../css/q/qw-cj9sdx.css';
import '../../css/j/jo30azbdh.css';
import '../../css/v/v1f6m-udo.css';
import '../../css/a/a_eudeb9i.css';
import '../../css/h/hsi_mxotd.css';
import '../../css/r/r7e0egy4o.css';
import '../../css/h/h3q70abic.css';
import '../../css/g/gzplhlb3a.css';
import '../../css/e/ett8w1bsm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xo_oyybjs"/><path class="zlb7djbvf"/><path class="qw-cj9sdx"/><path class="jo30azbdh"/><path class="v1f6m-udo"/><path class="a_eudeb9i"/><path class="hsi_mxotd"/><path class="r7e0egy4o"/><path class="h3q70abic"/><path class="gzplhlb3a"/><path class="ett8w1bsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:skull"} {...others} />);
}

export default Component;
