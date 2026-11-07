import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj6gwrmjs.css';
import '../../css/e/eacjsps5x.css';
import '../../css/f/fu8d2pk9u.css';
import '../../css/l/ln-3qwbqe.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="eacjsps5x"/><path class="fu8d2pk9u"/><path class="ln-3qwbqe"/><path class="x4f46-b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-chart-2-bold-duotone"} {...others} />);
}

export default Component;
