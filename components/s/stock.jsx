import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cp7cj5yir.css';
import '../../css/v/vet0bubnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cp7cj5yir"/><path class="vet0bubnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stock"} {...others} />);
}

export default Component;
