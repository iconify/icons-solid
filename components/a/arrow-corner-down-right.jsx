import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t6zym0e7z.css';
import '../../css/r/r2lxn6bao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t6zym0e7z"/><path class="r2lxn6bao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-corner-down-right"} {...others} />);
}

export default Component;
