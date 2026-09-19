import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p77rup82s.css';
import '../../css/j/jtqwqxf9f.css';
import '../../css/e/eoy15ydtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><circle class="p77rup82s"/><path class="jtqwqxf9f"/><path class="eoy15ydtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:upside-down-face-bold"} {...others} />);
}

export default Component;
