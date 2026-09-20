import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pdj3gvbnp.css';
import '../../css/m/mys4ucbkk.css';
import '../../css/a/ajmr8884e.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="pdj3gvbnp"/><path class="mys4ucbkk"/><path class="ajmr8884e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:network-connector"} {...others} />);
}

export default Component;
