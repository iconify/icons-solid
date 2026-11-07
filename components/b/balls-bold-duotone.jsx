import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/y/yryxcsblp.css';
import '../../css/h/he-at61yg.css';
import '../../css/h/hpqt-_b9o.css';
import '../../css/v/vyeiv-muk.css';
import '../../css/u/uqz8yyp_s.css';
import '../../css/j/jxawn3c_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="yryxcsblp"/><path class="he-at61yg"/></g><path class="hpqt-_b9o"/><path class="vyeiv-muk"/><path class="uqz8yyp_s"/><path class="jxawn3c_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:balls-bold-duotone"} {...others} />);
}

export default Component;
