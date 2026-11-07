import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h21hmgjli.css';
import '../../css/e/esqvhtbwf.css';
import '../../css/y/yf47oi66y.css';
import '../../css/j/jztzgxb0m.css';
import '../../css/w/w7_khh0dz.css';
import '../../css/o/ot0wyobut.css';
import '../../css/u/uhtnbzvss.css';
import '../../css/u/uzh13rbyj.css';
import '../../css/n/nmmtwib6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h21hmgjli"/><path class="esqvhtbwf"/><path class="yf47oi66y"/><path class="jztzgxb0m"/><path class="w7_khh0dz"/><path class="ot0wyobut"/><path class="uhtnbzvss"/><path class="uzh13rbyj"/><path class="nmmtwib6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sun-fog-outline"} {...others} />);
}

export default Component;
