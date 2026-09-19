import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3gqadqms.css';
import '../../css/x/x1cgi72hj.css';
import '../../css/b/bp6uewcuv.css';
import '../../css/o/o-yxj2bfk.css';
import '../../css/a/adbgsmbxj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="t3gqadqms"/><path class="x1cgi72hj"/><path clip-rule="evenodd" class="bp6uewcuv"/><path clip-rule="evenodd" class="o-yxj2bfk"/><path class="adbgsmbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:huggingface"} {...others} />);
}

export default Component;
