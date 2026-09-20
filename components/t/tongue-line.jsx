import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ronm36v_x.css';
import '../../css/e/erf0i1n1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ronm36v_x"/><path class="erf0i1n1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:tongue-line"} {...others} />);
}

export default Component;
