import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bboyc8n1g.css';
import '../../css/p/p3hvddcql.css';
import '../../css/r/rgcaz9bqd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="bboyc8n1g"/><path class="p3hvddcql"/><path class="rgcaz9bqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bed-empty"} {...others} />);
}

export default Component;
