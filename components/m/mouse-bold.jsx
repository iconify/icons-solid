import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3kb4cgpl.css';
import '../../css/u/unvvrib7k.css';
import '../../css/i/i0ly9nmio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r3kb4cgpl"><path class="unvvrib7k"/><path class="i0ly9nmio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:mouse-bold"} {...others} />);
}

export default Component;
