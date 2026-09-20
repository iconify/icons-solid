import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qexr5hbzp.css';
import '../../css/k/k3aceftav.css';
import '../../css/u/u7aibobtw.css';
import '../../css/u/unlqz5bhw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qexr5hbzp"/><path class="k3aceftav"/><path class="u7aibobtw"/><path class="unlqz5bhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:doubao"} {...others} />);
}

export default Component;
