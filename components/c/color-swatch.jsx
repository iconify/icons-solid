import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wwci4obui.css';
import '../../css/a/ar7v4zcbf.css';
import '../../css/m/mv28m9o7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wwci4obui"/><path class="ar7v4zcbf"/><path class="mv28m9o7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:color-swatch"} {...others} />);
}

export default Component;
