import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/us534x3fe.css';
import '../../css/u/uvezkteld.css';
import '../../css/y/ysok_0bql.css';
import '../../css/n/nw--i5q4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="us534x3fe"/><path class="uvezkteld"/><path class="ysok_0bql"/><path class="nw--i5q4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:screen-1"} {...others} />);
}

export default Component;
