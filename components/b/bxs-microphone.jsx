import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl7t8bcmf.css';
import '../../css/y/yzdqdzd3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zl7t8bcmf"/><path class="yzdqdzd3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-microphone"} {...others} />);
}

export default Component;
