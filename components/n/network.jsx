import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fm9vtkb7w.css';
import '../../css/e/e3_eq5b9n.css';
import '../../css/y/ynivx94-x.css';
import '../../css/r/r7ac2ob5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect class="fm9vtkb7w"/><rect class="e3_eq5b9n"/><rect class="ynivx94-x"/><path class="r7ac2ob5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:network"} {...others} />);
}

export default Component;
