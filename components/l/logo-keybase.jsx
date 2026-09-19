import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydf994boj.css';
import '../../css/e/ev5zxibtw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ydf994boj"/><path class="ev5zxibtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-keybase"} {...others} />);
}

export default Component;
