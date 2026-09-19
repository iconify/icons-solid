import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jed83ob_g.css';
import '../../css/d/dy2c4igvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jed83ob_g"/><path class="dy2c4igvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:rss-feed-squared"} {...others} />);
}

export default Component;
