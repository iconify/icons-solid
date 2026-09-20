import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qp2avq79j.css';
import '../../css/c/cmpud0cha.css';
import '../../css/u/uvj42v07t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="qp2avq79j"/><path clip-rule="evenodd" class="cmpud0cha"/><path clip-rule="evenodd" class="uvj42v07t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:rss-feed-logo"} {...others} />);
}

export default Component;
