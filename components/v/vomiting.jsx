import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a1842w96q.css';
import '../../css/a/arjifdfsw.css';
import '../../css/a/asjz9wbza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a1842w96q"/><path class="arjifdfsw"/><path class="asjz9wbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:vomiting"} {...others} />);
}

export default Component;
