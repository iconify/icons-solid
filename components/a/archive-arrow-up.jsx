import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bnkl-hfqz.css';
import '../../css/a/adejynbup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bnkl-hfqz"/><path class="adejynbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:archive-arrow-up"} {...others} />);
}

export default Component;
