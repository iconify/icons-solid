import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn6ebachz.css';
import '../../css/z/zeqvi16vh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vn6ebachz"/><path class="zeqvi16vh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-angular"} {...others} />);
}

export default Component;
