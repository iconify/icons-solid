import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wo2mc-qtj.css';
import '../../css/q/qg0dh0bef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wo2mc-qtj"/><path class="qg0dh0bef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-edit-01"} {...others} />);
}

export default Component;
