import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/blib_jq0f.css';
import '../../css/y/yl2hmw4iw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="blib_jq0f"/><path class="yl2hmw4iw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:emoji-look-up"} {...others} />);
}

export default Component;
