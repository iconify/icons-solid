import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/om8otdbsq.css';
import '../../css/m/m5ejp6b1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="om8otdbsq"/><path class="m5ejp6b1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:note-02"} {...others} />);
}

export default Component;
