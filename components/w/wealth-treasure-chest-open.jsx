import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o-0s74bqa.css';
import '../../css/l/l6hbmybvh.css';
import '../../css/o/o9d9mccyf.css';
import '../../css/c/ca9jddbuc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="o-0s74bqa"/><path class="l6hbmybvh"/><path class="o9d9mccyf"/><path class="ca9jddbuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:wealth-treasure-chest-open"} {...others} />);
}

export default Component;
