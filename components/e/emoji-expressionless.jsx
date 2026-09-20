import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk8vunbuz.css';
import '../../css/j/jb0hwxb_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yk8vunbuz"/><path clip-rule="evenodd" class="jb0hwxb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:emoji-expressionless"} {...others} />);
}

export default Component;
