import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2up0z4wt.css';
import '../../css/b/b43wj-bqg.css';
import '../../css/j/jzrkcbz0u.css';
import '../../css/l/li-k4356h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h2up0z4wt"/><path class="b43wj-bqg"/><path class="jzrkcbz0u"/><path class="li-k4356h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:smiley-mad"} {...others} />);
}

export default Component;
