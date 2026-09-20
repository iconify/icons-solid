import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u-7xzabfq.css';
import '../../css/b/btss-ebom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u-7xzabfq"/><path class="btss-ebom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-web-form-drop-down-menu-1"} {...others} />);
}

export default Component;
