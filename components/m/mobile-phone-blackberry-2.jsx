import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jxzvrf7nu.css';
import '../../css/b/b-i2wbkao.css';
import '../../css/n/nh14lfrds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jxzvrf7nu"/><path class="b-i2wbkao"/><path class="nh14lfrds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:mobile-phone-blackberry-2"} {...others} />);
}

export default Component;
