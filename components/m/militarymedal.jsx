import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqz3k7l0s.css';
import '../../css/u/umflg2bzj.css';
import '../../css/z/zw5694aua.css';
import '../../css/t/te8604bdt.css';
import '../../css/f/fe7rbjd3a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gqz3k7l0s"/><path class="umflg2bzj"/><path class="zw5694aua"/><circle class="te8604bdt"/><path class="fe7rbjd3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:militarymedal"} {...others} />);
}

export default Component;
