import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/ncfm_9bnf.css';
import '../../css/e/e0nysjjqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ncfm_9bnf"/><path class="e0nysjjqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:rss-feed"} {...others} />);
}

export default Component;
