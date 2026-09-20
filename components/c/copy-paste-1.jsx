import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dqapm1bdf.css';
import '../../css/k/ko63g-1ne.css';
import '../../css/u/uxkirjjav.css';
import '../../css/j/jbz801bye.css';
import '../../css/o/o1vtedb8x.css';
import '../../css/a/a1-j9xyki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dqapm1bdf"/><path class="ko63g-1ne"/><path class="uxkirjjav"/><path class="jbz801bye"/><path class="o1vtedb8x"/><path class="a1-j9xyki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:copy-paste-1"} {...others} />);
}

export default Component;
