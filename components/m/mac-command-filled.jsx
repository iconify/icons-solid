import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to8dx_b8t.css';
import '../../css/x/x0n0x1bdz.css';
import '../../css/f/f_lfe3b5g.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="to8dx_b8t"/><path class="x0n0x1bdz"/><path class="f_lfe3b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:mac-command-filled"} {...others} />);
}

export default Component;
