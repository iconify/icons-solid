import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v82e24b6u.css';
import '../../css/x/xesggzbzh.css';
import '../../css/o/o0t_mxbai.css';
import '../../css/u/u4xuplbqa.css';
import '../../css/x/x6tqtm9ls.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v82e24b6u"/><path class="xesggzbzh"/><path clip-rule="evenodd" class="o0t_mxbai"/><path class="u4xuplbqa"/><path clip-rule="evenodd" class="x6tqtm9ls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:future"} {...others} />);
}

export default Component;
