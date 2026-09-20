import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iqlwd2bmq.css';
import '../../css/e/edbo7_svx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iqlwd2bmq"/><path class="edbo7_svx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cloud-file"} {...others} />);
}

export default Component;
