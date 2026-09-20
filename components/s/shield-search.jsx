import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zkqv8i9di.css';
import '../../css/p/p-y0ptmfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zkqv8i9di"/><path class="p-y0ptmfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shield-search"} {...others} />);
}

export default Component;
