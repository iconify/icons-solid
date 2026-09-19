import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yzfkwyb_b.css';
import '../../css/c/cu3su9ffu.css';
import '../../css/o/o1sk4_0cf.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yzfkwyb_b"/><path class="cu3su9ffu"/><path class="o1sk4_0cf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:de"} {...others} />);
}

export default Component;
