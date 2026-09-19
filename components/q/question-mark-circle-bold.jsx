import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p77rup82s.css';
import '../../css/g/gvie50bbb.css';
import '../../css/x/xifav5b9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><circle class="p77rup82s"/><path class="gvie50bbb"/><path class="xifav5b9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:question-mark-circle-bold"} {...others} />);
}

export default Component;
