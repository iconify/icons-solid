import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u4oyxub7o.css';
import '../../css/g/g089l2b2t.css';
import '../../css/j/jyiospv5h.css';
import '../../css/v/v8llf9bzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u4oyxub7o"/><path class="g089l2b2t"/><path class="jyiospv5h"/><path class="v8llf9bzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:wifi-off"} {...others} />);
}

export default Component;
