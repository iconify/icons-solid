import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_1xrq.css';
import '../../css/g/glyvbs.css';
import '../../css/y/yuzzkf.css';
import '../../css/z/zxndow.css';
import '../../css/g/g7271p.css';
import '../../css/h/hh6w2l.css';
import '../../css/y/y-onct.css';
import '../../css/q/qe59mu.css';
import '../../css/q/qw8aly.css';
import '../../css/b/botfzx.css';
import '../../css/s/s8e22g.css';
import '../../css/i/iwuxlh.css';
import '../../css/z/zvvtjx.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGJEjV9brc"><path class="g_1xrq glyvbs yuzzkf zxndow"/><path class="g7271p g_1xrq yuzzkf zxndow"/><path class="g_1xrq hh6w2l yuzzkf zxndow"/><path class="g_1xrq y-onct yuzzkf zxndow"/><path class="g_1xrq qe59mu qw8aly"/></mask></defs><path mask="url(#SVGJEjV9brc)" class="botfzx"/><path class="ds6iuu g_1xrq qe59mu s8e22g yuzzkf"/><path class="g_1xrq iwuxlh s8e22g yuzzkf"/><path class="g_1xrq s8e22g yuzzkf zvvtjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:car-light-alert"} {...others} />);
}

export default Component;
