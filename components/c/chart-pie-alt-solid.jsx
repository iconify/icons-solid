import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzargkbqk.css';
import '../../css/f/f11z55kqw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lzargkbqk"/><path class="f11z55kqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:chart-pie-alt-solid"} {...others} />);
}

export default Component;
