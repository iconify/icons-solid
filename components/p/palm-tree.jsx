import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvbgwwrmy.css';
import '../../css/d/dsew0q4ub.css';
import '../../css/y/ymdtkmtan.css';
import '../../css/h/ha5hgtr1o.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vvbgwwrmy"/><path class="dsew0q4ub"/><path class="ymdtkmtan"/><path class="ha5hgtr1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:palm-tree"} {...others} />);
}

export default Component;
