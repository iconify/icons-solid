import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aezr_7ikx.css';
import '../../css/q/qmdx-0doa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aezr_7ikx"/><path class="qmdx-0doa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:instrument-tambourine"} {...others} />);
}

export default Component;
