import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s8e1sq_6r.css';
import '../../css/a/at8ghrwxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s8e1sq_6r"/><path class="at8ghrwxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:computer-phone-sync"} {...others} />);
}

export default Component;
