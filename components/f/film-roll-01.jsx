import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qj6gnaban.css';
import '../../css/w/w8b1rkbha.css';
import '../../css/u/uy7cb6bch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="qj6gnaban"/><path class="w8b1rkbha"/><path class="uy7cb6bch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:film-roll-01"} {...others} />);
}

export default Component;
