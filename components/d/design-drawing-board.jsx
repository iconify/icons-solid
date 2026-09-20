import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i71484s2o.css';
import '../../css/y/y-_epubav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i71484s2o"/><path class="y-_epubav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:design-drawing-board"} {...others} />);
}

export default Component;
