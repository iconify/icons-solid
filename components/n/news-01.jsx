import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ef0enlc8h.css';
import '../../css/i/ihkggclgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ef0enlc8h"/><path class="ihkggclgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:news-01"} {...others} />);
}

export default Component;
