import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h77rvsg5y.css';
import '../../css/c/csorej16m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h77rvsg5y"/><path class="csorej16m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-angular"} {...others} />);
}

export default Component;
