import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au5-sab1q.css';
import '../../css/h/hntgybcog.css';
import '../../css/v/v_ohp313d.css';
import '../../css/d/dvd6fwb9u.css';
import '../../css/i/i6jfamhaf.css';
import '../../css/v/vu0mtsbqq.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGfdg6hBGo" class="au5-sab1q"/></defs><g class="hntgybcog"><use href="#SVGfdg6hBGo"/><path class="v_ohp313d"/><use href="#SVGfdg6hBGo" class="dvd6fwb9u"/><path class="i6jfamhaf"/><path class="vu0mtsbqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:devices3"} {...others} />);
}

export default Component;
