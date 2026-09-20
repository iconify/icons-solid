import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/a/a7npbebsm.css';
import '../../css/y/yhmv9f00n.css';
import '../../css/y/y08z3db8a.css';
import '../../css/g/gqe7as18i.css';
import '../../css/a/a_3e9ebsi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="pr52f_b5y"><path class="a7npbebsm"/><path class="yhmv9f00n"/><path class="y08z3db8a"/><path class="gqe7as18i"/><path class="a_3e9ebsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:blood-donate-drop"} {...others} />);
}

export default Component;
