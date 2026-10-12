import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u4e__sbrn.css';
import '../../css/s/sr8esp53w.css';
import '../../css/z/zmto0objo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u4e__sbrn"/><path class="sr8esp53w"/><path class="zmto0objo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:decimals-more"} {...others} />);
}

export default Component;
