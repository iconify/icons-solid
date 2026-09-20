import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o7mk0ob1b.css';
import '../../css/g/goy1wnb5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o7mk0ob1b"/><path class="goy1wnb5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ai-folder-robot"} {...others} />);
}

export default Component;
