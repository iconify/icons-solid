import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eu47wd2bq.css';
import '../../css/w/wd-i7utqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="eu47wd2bq"/><path class="wd-i7utqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:rss"} {...others} />);
}

export default Component;
