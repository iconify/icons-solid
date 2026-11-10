import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyx1jxu_r.css';
import '../../css/z/z7bqlfbqb.css';
import '../../css/a/a7fj8acel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oyx1jxu_r"/><path class="z7bqlfbqb"/><path class="a7fj8acel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:eraser"} {...others} />);
}

export default Component;
