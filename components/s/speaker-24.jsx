import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etkjk70xj.css';
import '../../css/z/zz7muabio.css';
import '../../css/y/yewcxcc-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="etkjk70xj"/><path class="zz7muabio"/><path class="yewcxcc-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:speaker-24"} {...others} />);
}

export default Component;
