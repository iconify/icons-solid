import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz0kxdb2u.css';
import '../../css/b/b5q998adc.css';
import '../../css/i/ieesa9btj.css';
import '../../css/y/yefg016-l.css';
import '../../css/t/tpuc-hf5m.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="sz0kxdb2u"/><path class="b5q998adc"/><path class="ieesa9btj"/><path class="yefg016-l"/><path class="tpuc-hf5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:tortoisegit"} {...others} />);
}

export default Component;
