import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/u/uc-ixs29s.css';
import '../../css/a/aa74oebhb.css';
import '../../css/y/yqosdwsmj.css';
import '../../css/y/yab__0bpa.css';
import '../../css/r/rmqdbcbjx.css';
import '../../css/k/kpf9qybtc.css';
import '../../css/a/a6qz5pbrw.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="uc-ixs29s"/><path class="aa74oebhb"/><ellipse class="yqosdwsmj"/><path class="yab__0bpa"/><path class="rmqdbcbjx"/><path class="kpf9qybtc"/><path class="a6qz5pbrw"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-wales"} {...others} />);
}

export default Component;
