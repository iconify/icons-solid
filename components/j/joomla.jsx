import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muz_ezbtz.css';
import '../../css/w/w21ld6b4s.css';
import '../../css/k/kxk-2wido.css';
import '../../css/n/n2j8p5b2m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="muz_ezbtz"/><path class="w21ld6b4s"/><path class="kxk-2wido"/><path class="n2j8p5b2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:joomla"} {...others} />);
}

export default Component;
