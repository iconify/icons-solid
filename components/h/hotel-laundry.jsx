import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/agdz4c20a.css';
import '../../css/w/waaj2fbbt.css';
import '../../css/n/n07ltf2td.css';
import '../../css/a/a108zvp3f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="agdz4c20a"/><path clip-rule="evenodd" class="waaj2fbbt"/><path class="n07ltf2td"/><path class="a108zvp3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hotel-laundry"} {...others} />);
}

export default Component;
