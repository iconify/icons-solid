import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ey4tr4b9t.css';
import '../../css/z/zlhh38l7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ey4tr4b9t"/><path class="zlhh38l7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:book-marked"} {...others} />);
}

export default Component;
