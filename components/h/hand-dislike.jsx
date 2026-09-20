import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd93vnikl.css';
import '../../css/v/vnapcuj_q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zd93vnikl"/><path class="vnapcuj_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-dislike"} {...others} />);
}

export default Component;
