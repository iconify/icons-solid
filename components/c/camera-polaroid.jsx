import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/j/jezmz7bhz.css';
import '../../css/j/jv223fbvp.css';
import '../../css/x/xos270bgg.css';
import '../../css/m/mkh82actf.css';
import '../../css/w/wi4mv4bws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="jezmz7bhz"/><path class="jv223fbvp"/><path class="xos270bgg"/><path class="mkh82actf"/><path class="wi4mv4bws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:camera-polaroid"} {...others} />);
}

export default Component;
