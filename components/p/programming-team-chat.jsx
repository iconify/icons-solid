import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x-s2c-blu.css';
import '../../css/v/v6jh7nbwl.css';
import '../../css/s/ssflmdble.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="x-s2c-blu"/><path class="v6jh7nbwl"/><path class="ssflmdble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:programming-team-chat"} {...others} />);
}

export default Component;
