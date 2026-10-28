import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yndt37ysw.css';
import '../../css/m/m0u-h5bsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yndt37ysw"/><path class="m0u-h5bsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:brackets-ellipsis-left"} {...others} />);
}

export default Component;
