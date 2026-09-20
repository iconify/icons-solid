import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tzy_pd90l.css';
import '../../css/u/ua78apbcf.css';
import '../../css/f/fjm43zboa.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="tzy_pd90l"/><path class="ua78apbcf"/><path class="fjm43zboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ai-edit-robot-flat"} {...others} />);
}

export default Component;
