import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qaqb1cc3j.css';
import '../../css/l/lrfvu_bje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qaqb1cc3j"/><path class="lrfvu_bje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:book-star-1"} {...others} />);
}

export default Component;
