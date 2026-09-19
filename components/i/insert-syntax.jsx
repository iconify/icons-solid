import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1wv3xwuv.css';
import '../../css/u/u2y96rwvy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d1wv3xwuv"/><path class="u2y96rwvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:insert-syntax"} {...others} />);
}

export default Component;
