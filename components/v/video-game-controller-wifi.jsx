import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hmajdsbvs.css';
import '../../css/x/x70s9bt2g.css';
import '../../css/n/n2j85qahi.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="hmajdsbvs"/><path class="x70s9bt2g"/><path class="n2j85qahi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-game-controller-wifi"} {...others} />);
}

export default Component;
