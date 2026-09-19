import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gyf0ee2rr.css';
import '../../css/g/gofpikhwp.css';
import '../../css/a/azg3zbcbt.css';
import '../../css/y/y6pici8-g.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="gyf0ee2rr"/><path class="gofpikhwp"/><path class="azg3zbcbt"/><path class="y6pici8-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:gh"} {...others} />);
}

export default Component;
