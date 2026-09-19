import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nn4yjsf4n.css';
import '../../css/j/jcw57d7cw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nn4yjsf4n"/><path class="jcw57d7cw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:database-expand"} {...others} />);
}

export default Component;
