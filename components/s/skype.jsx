import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/o/o5q1bsw-x.css';
import '../../css/w/wkoo5ybqu.css';
import '../../css/a/aw1owfbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="o5q1bsw-x"/><path class="wkoo5ybqu"/><path class="aw1owfbgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:skype"} {...others} />);
}

export default Component;
