import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7keyur9y.css';
import '../../css/g/gegmizbrp.css';
import '../../css/n/nykr5s_qb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g7keyur9y"/><path class="gegmizbrp"/><path class="nykr5s_qb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computer-old-electronics-bug"} {...others} />);
}

export default Component;
