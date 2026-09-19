import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/okyx88ohi.css';
import '../../css/m/mlih5bceo.css';
import '../../css/z/zlhh38l7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="okyx88ohi"/><path class="mlih5bceo"/><path class="zlhh38l7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:book-headphones"} {...others} />);
}

export default Component;
