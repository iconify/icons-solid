import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvmue5hsj.css';
import '../../css/b/b8f7uhb9w.css';
import '../../css/j/jj-f21boy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mvmue5hsj"/><path class="b8f7uhb9w"/><path class="jj-f21boy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:phone-5"} {...others} />);
}

export default Component;
